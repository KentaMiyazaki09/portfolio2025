"use client";

import { List } from "lucide-react";

import { useSharedState } from "@/context/SharedStateProvider";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import { ScrollArea } from "@/components/ui/scroll-area";

import { Work } from "@/types/types";
import React from "react";
import Image from "next/image";

type Props = {
  list: Work[];
};

const WorksList: React.FC<Props> = ({ list }) => {
  const { setSelectedId } = useSharedState();

  return (
    <div className="fixed top-[50px] md:top-[80px] left-[18px] z-30">
      <Popover>
        <PopoverTrigger className="inline-flex items-center justify-center rounded-full border border-white p-2 data-[state=open]:bg-white/10 data-[state=open]:shadow-inner transition w-16 md:w-24 h-10 md:h-16">
          <List className="w-5 h-5 md:w-8 md:h-8 text-white" />
        </PopoverTrigger>

        <PopoverContent
          sideOffset={20}
          side="bottom"
          align="end"
          className="p-[0] z-30"
        >
          <ScrollArea className="h-60 text-neutral-200 rounded-md border">
            <Table className="bg-black/20 backdrop-blur-sm">
              <TableBody>
                {list.map(({ id, ttl, img }) => (
                  <TableRow key={id} onClick={() => setSelectedId(id)}>
                    <TableCell>
                      <Image
                        src={`/list/${img}`}
                        width={150}
                        height={150}
                        alt="Picture of the author"
                        loading="eager"
                      />
                    </TableCell>
                    <TableCell className="text-ls md:text-lg">{ttl}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default WorksList;
