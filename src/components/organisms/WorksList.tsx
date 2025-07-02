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

import { Work } from "@/types/types";
import React from "react";

type Props = {
  list: Work[];
};

const WorksList: React.FC<Props> = ({ list }) => {
  return (
    <div className="fixed top-[50%] right-[30px] z-50">
      <Popover>
        <PopoverTrigger className="inline-flex items-center justify-center rounded-full border border-white p-2 data-[state=open]:bg-white/10 data-[state=open]:shadow-inner transition">
          <List className="w-5 h-5 text-white" />
        </PopoverTrigger>

        <PopoverContent sideOffset={30} side="bottom" align="end">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>img</TableHead>
                <TableHead>ttl</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {list.map(({ id, ttl, img }) => (
                <TableRow key={id}>
                  <TableCell>{img}</TableCell>
                  <TableCell>{ttl}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default WorksList;
