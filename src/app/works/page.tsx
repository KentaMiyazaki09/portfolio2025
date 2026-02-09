import PageTtl from "@/components/atoms/PageTtl";
import Works from "@/components/organisms/Works";
import { microcms } from "@/lib/microcms";

type Work = {
  title: string;
  description: string;
  image: {
    url: string;
  };
  url: string;
};

const WorksPage = async () => {
  const data = await microcms.getList<Work>({
    endpoint: "works",
  });

  const list = data.contents.map((work) => ({
    thumb: work.image.url,
    url: work.url,
    ttl: work.title,
    comment: work.description,
  }));

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
