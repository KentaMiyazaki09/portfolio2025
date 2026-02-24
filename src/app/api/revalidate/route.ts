/**
 * microCMS WebhookのHMAC署名を検証し、正当な更新通知のときだけ/works をrevalidateする
 */

import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

import crypto from "crypto";

export async function POST(req: Request) {
  const signature =
    req.headers.get("x-microcms-signature") ||
    req.headers.get("X-microcms-signature");

  if (!signature) {
    return NextResponse.json({ message: "Missing signature" }, { status: 401 });
  }

  // 署名を検証（HMAC-SHA256）
  const secret = process.env.MICROCMS_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { message: "Server misconfigured" },
      { status: 500 },
    );
  }

  const body = await req.text();
  const expected = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex");

  const comparison =
    signature.length === expected.length &&
    crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));

  if (!comparison) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }

  // /worksを再検証
  revalidateTag("works", "max");

  return NextResponse.json({ revalidatePath: true, tag: "works" });
}
