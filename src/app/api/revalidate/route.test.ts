import { describe, it, expect, vi, beforeEach } from "vitest";
import crypto from "crypto";
import { POST } from "./route";

// next/cacheをモック
vi.mock("next/cache", () => ({
  revalidatePath: vi.fn(),
}));

// NextResponse.jsonを返り値が追える形にモック
vi.mock("next/server", () => ({
  NextResponse: {
    json: vi.fn((body: any, init?: any) => ({
      body,
      status: init?.status ?? 200,
    })),
  },
}));

import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

describe("POST webhook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    delete process.env.MICROCMS_WEBHOOK_SECRET;
  });

  it("署名が無ければ401", async () => {
    const req = new Request("http://localhost/api/webhook", {
      method: "POST",
      body: "hello",
      headers: {},
    });

    const res: any = await POST(req);

    expect(NextResponse.json).toHaveBeenCalledWith(
      { message: "Missing signature" },
      { status: 401 },
    );
    expect(res.status).toBe(401);
    expect(revalidatePath).not.toHaveBeenCalled();
  });

  it("SECRETが無ければ500", async () => {
    const req = new Request("http://localhost/api/webhook", {
      method: "POST",
      body: "hello",
      headers: { "x-microcms-signature": "abc" },
    });

    const res: any = await POST(req);

    expect(NextResponse.json).toHaveBeenCalledWith(
      { message: "Server misconfigured" },
      { status: 500 },
    );
    expect(res.status).toBe(500);
    expect(revalidatePath).not.toHaveBeenCalled();
  });

  it("署名が不一致なら401", async () => {
    process.env.MICROCMS_WEBHOOK_SECRET = "secret";

    const req = new Request("http://localhost/api/webhook", {
      method: "POST",
      body: "hello",
      headers: { "x-microcms-signature": "wrong" },
    });

    const res: any = await POST(req);

    expect(NextResponse.json).toHaveBeenCalledWith(
      { message: "Invalid signature" },
      { status: 401 },
    );
    expect(res.status).toBe(401);
    expect(revalidatePath).not.toHaveBeenCalled();
  });

  it("署名が一致したらrevalidatePath('/works')して200", async () => {
    process.env.MICROCMS_WEBHOOK_SECRET = "secret";

    const body = "hello";
    const expected = crypto
      .createHmac("sha256", process.env.MICROCMS_WEBHOOK_SECRET)
      .update(body)
      .digest("hex");

    const req = new Request("http://localhost/api/webhook", {
      method: "POST",
      body,
      headers: { "x-microcms-signature": expected },
    });

    const res: any = await POST(req);

    expect(revalidatePath).toHaveBeenCalledTimes(1);
    expect(revalidatePath).toHaveBeenCalledWith("/works");

    expect(res.status).toBe(200);
  });
});
