"use client";

import { List } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ScrollArea } from "@/components/ui/scroll-area";

import { Work } from "@/types/types";
import React from "react";

type Props = {
  list: Work[];
};

const WorksList: React.FC<Props> = ({ list }) => {
  return (
    <div className="fixed top-[80px] right-[18px] z-50s">
      <Popover>
        <PopoverTrigger className="inline-flex items-center justify-center rounded-full border border-white p-2 data-[state=open]:bg-white/10 data-[state=open]:shadow-inner transition">
          <List className="w-5 h-5 text-white" />
        </PopoverTrigger>

        <PopoverContent
          sideOffset={30}
          side="bottom"
          align="end"
          className="p-[0]"
        >
          <ScrollArea className="h-72 text-neutral-200 rounded-md border">
            <Table className="bg-[oklch(.200_0_0)]">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-neutral-50">img</TableHead>
                  <TableHead className="text-neutral-50">ttl</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="">
                {list.map(({ id, ttl, img }) => (
                  <TableRow key={id}>
                    <TableCell>{img}</TableCell>
                    <TableCell>{ttl}</TableCell>
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
