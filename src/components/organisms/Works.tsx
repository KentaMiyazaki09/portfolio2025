import Image from "next/image";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

type ListItem = {
  thumb: string;
  url: string;
  ttl: string;
  tags: string[];
  comment: string;
};

type ListProps = {
  list: ListItem[];
};

const Works = ({ list }: ListProps) => (
  <div className="md:flex md:flex-wrap md:justify-between">
    {list.map(({ ttl, url, thumb, tags, comment }) => (
      <Card key={ttl} className="bg-black/70 w-fill md:w-[49%] mb-3">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <CardHeader className="pb-4">
            <div className="relative w-full h-[100px] md:h-[150px] mb-3">
              <Image
                src={thumb}
                alt="Picture of the author"
                fill
                loading="eager"
                className="object-cover"
              />
            </div>
            <CardTitle className="text-neutral-100 text-xl">{ttl}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-200">{comment}</p>
          </CardContent>
          <CardFooter>
            {tags.map((tag) => (
              <span key={tag} className="text-neutral-300 text-sm mr-2">
                {tag}
              </span>
            ))}
          </CardFooter>
        </a>
      </Card>
    ))}
  </div>
);

export default Works;
