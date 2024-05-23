"use client";
import React, { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TocProps {
  html: string;
  headingIds: string[];
}

const Toc = ({ html, headingIds }: TocProps) => {
  const activeId = useActiveItem(headingIds);

  useEffect(() => {
    var element = document.querySelectorAll(`a[href="#${activeId}"]`);
    if (element) {
      element[0].classList.add("!text-foreground");
    }
  }, [activeId]);

  return (
    <div>
      <h1 className="font-semibold capitalize">Table Of Contents</h1>
      <ScrollArea className="prose prose-sm max-w-none pb-10 dark:prose-invert md:prose-sm prose-a:font-normal prose-a:text-muted-foreground prose-a:no-underline hover:prose-a:text-foreground">
        <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-8 text-muted-foreground">
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
      </ScrollArea>
    </div>
  );
};

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState(itemIds[0]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    itemIds?.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

export default Toc;
