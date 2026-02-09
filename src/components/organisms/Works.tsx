import Image from "next/image";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { ListItem } from "@/types/types";

type ListProps = {
  list: ListItem[];
};

const Works = ({ list }: ListProps) => (
  <div className="md:flex md:flex-wrap md:justify-between">
    {list.map(({ ttl, url, thumb, comment }) => (
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
        </a>
      </Card>
    ))}
  </div>
);

export default Works;
