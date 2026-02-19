import { beforeEach, describe, expect, it, vi } from "vitest";

// microcms import 元を mock
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

  it("microcms.getListが正しい結果を返す。", async () => {
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

    expect(microcms.getList).toHaveBeenCalledTimes(1);
    expect(microcms.getList).toHaveBeenCalledWith({
      endpoint: "works",
      customRequestInit: {
        next: { tags: ["works"] },
      },
    });

    expect(res).toEqual(response);
  });
});
