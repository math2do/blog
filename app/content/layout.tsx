"use client";

import MaxWidthWrapper from "@/components/max-widht-wrapper";
import ContentList from "./contents";
import { ScrollArea } from "@/components/ui/scroll-area";
import { contentMetaData } from "@/content";
import { useState, createContext } from "react";

type TopicContextProps = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

export const TopicContext = createContext<TopicContextProps>({
  selected: "",
  setSelected: () => {},
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selected, setSelected] = useState("/content/getting-started");

  return (
    <TopicContext.Provider value={{ selected, setSelected }}>
      <MaxWidthWrapper className="px-4 md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 pb-4 md:sticky md:block">
          <ScrollArea className="h-full">
            <ContentList contentMetaData={contentMetaData} />
          </ScrollArea>
        </aside>
        {children}
      </MaxWidthWrapper>
    </TopicContext.Provider>
  );
}