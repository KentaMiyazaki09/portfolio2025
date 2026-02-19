import { beforeEach, describe, expect, it, vi } from "vitest";

// microcms import元をmock
vi.mock("@/lib/microcms", () => {
  return {
    microcms: {
      getList: vi.fn(),
    },
  };
});

// mockしたmicrocmsを参照
import { microcms } from "@/lib/microcms";
import { getWorks } from "./page";

describe("getWorks", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("microcms.getListが成功時、正しい結果を返す。", async () => {
    // 非同期成功を再現
    const response = {
      contents: [
        {
          id: "1",
          title: "title",
          description: "describe",
          image: { url: "https://example.com/a.png" },
          url: "https://example.com",
        },
      ],
    };
    (microcms.getList as any).mockResolvedValue(response);

    const res = await getWorks();

    // 呼ばれた回数は１回だけなのを確認（二重に呼ばれていないか確認）
    expect(microcms.getList).toHaveBeenCalledTimes(1);

    // 呼び出し時の引数の確認
    expect(microcms.getList).toHaveBeenCalledWith({
      endpoint: "works",
      customRequestInit: {
        next: { tags: ["works"] },
      },
    });

    expect(res).toEqual(response);
  });

  it("getListが例外を投げたら空の配列を返す。", async () => {
    // 非同期失敗を再現
    (microcms.getList as any).mockRejectedValue(new Error("boom"));

    // console.logを監視対象、ダミー化してテスト結果出力がログで汚れないようにする。
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    const response = await getWorks();

    expect(response).toEqual({ contents: [] });
    expect(logSpy).toHaveBeenCalledWith("Faild to fetch Works.");

    // console.logの状態を元に戻す
    logSpy.mockRestore();
  });
});
