"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { ContentMetaDataType } from "@/content";
import { TopicContext } from "./topic-provider";
import { usePathname } from "next/navigation";

interface ContentListProps {
  contentMetaData: ContentMetaDataType[];
}

const ContentList = ({ contentMetaData }: ContentListProps) => {
  const { setSelected } = useContext(TopicContext);
  const pathname = usePathname();

  return (
    <div className="sticky block h-[calc(100vh-5.5rem)]">
      <ul className="w-full space-y-2">
        {contentMetaData.map((file) => {
          return (
            <Link
              href={file.path}
              onClick={() => {
                setSelected(file.path);
              }}
              key={file.path}
              className={`block w-full cursor-pointer text-[0.93rem] capitalize transition-all duration-300 hover:underline hover:underline-offset-4 ${file.path === pathname ? `text-foreground underline underline-offset-4` : "text-muted-foreground"}`}
            >
              {file.title.replaceAll("-", " ")}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default ContentList;
