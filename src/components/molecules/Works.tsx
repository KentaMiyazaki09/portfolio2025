import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ListItem = {
  thumb: string;
  url: string;
  ttl: string;
  tags: string[];
};

type ListProps = {
  list: ListItem[];
};

const Works = ({ list }: ListProps) => {
  return (
    <div className="flex flex-wrap fixed z-30">
      {list.map(({ ttl, url, thumb, tags }) => (
        <Card className="bg-black/20 backdrop-blur-sm ">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <CardHeader>
              <Image
                src={thumb}
                width={100}
                height={150}
                alt="Picture of the author"
                loading="eager"
              />
              <CardTitle className="text-neutral-100">{ttl}</CardTitle>
            </CardHeader>
            <CardFooter>
              {tags.map((tag) => (
                <span className="text-neutral-300 text-sm mr-2">{tag}</span>
              ))}
            </CardFooter>
          </a>
        </Card>
      ))}
    </div>
  );
};

export default Works;
