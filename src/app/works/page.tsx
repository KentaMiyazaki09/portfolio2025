import PageTtl from "@/components/atoms/PageTtl";
import Works from "@/components/organisms/Works";
import { microcms } from "@/lib/microcms";
import { normalizeWorkUrl } from "@/utility/normalizeWorkUrl";

type Work = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
  url: string;
};

export async function getWorks() {
  try {
    return await microcms.getList<Work>({
      endpoint: "works",
      customRequestInit: {
        next: { tags: ["works"] },
      },
    });
  } catch (e) {
    console.log("Faild to fetch Works.");
    return { contents: [] };
  }
}

const WorksPage = async () => {
  const data = await getWorks();

  const list = data.contents.map((work) => {
    const safeUrl = normalizeWorkUrl(work.url);
    return {
      id: work.id,
      thumb: work.image.url || "/no_image.jpg",
      url: safeUrl,
      ttl: work.title,
      comment: work.description,
    };
  });

  return (
    <div className="min-h-dvh w-full pt-[100px] md:pt-[140px] pr-[20px] pb-[50px] pl-[20px] fixed md:left-[50%] md:translate-x-[-50%] h-full overflow-auto scrollbar-hide">
      <PageTtl text="WORKS" />
      <div className="w-full md:max-w-[800px] md:m-auto">
        <Works list={list} />
      </div>
    </div>
  );
};

export default WorksPage;
