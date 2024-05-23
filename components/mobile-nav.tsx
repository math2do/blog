"use client";

import React from "react";
import { Menu } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { Terminal } from "lucide-react";
import { contentMetaData } from "@/content";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";

const MobileNav = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="space-y-4">
            <div className="flex cursor-pointer items-end text-base">
              <Terminal className="w-5" />
              <h1 className="font-bold">
                <span className="text-primary">math</span>
                <span>2do</span>
              </h1>
            </div>
            <Separator className="h-[0.1px] bg-muted" />
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-3.5rem)] px-4 pb-10">
          {contentMetaData.map((content, index) => {
            return (
              <Link
                onClick={() => setOpen(false)}
                key={index}
                href={content.path}
                className="mt-4 block w-full cursor-pointer text-[0.93rem] font-medium capitalize text-muted-foreground transition-all duration-300 hover:underline hover:underline-offset-4"
              >
                {content.title.replaceAll("-", " ")}
              </Link>
            );
          })}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
