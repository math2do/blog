"use client";

import { contents } from "@/content";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import CustomBreadcrumb from "@/components/custom-breadcrumb";
import { capitialize } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Toc from "./toc";
import Link from "next/link";
import { useContext } from "react";
import { TopicContext } from "../topic-provider";

interface ContentPageProps {
  params: { slug: string[] }; // slug has values like: ["system-design", "presentation"]
}

const ContentLayout = ({ params }: ContentPageProps) => {
  const { setSelected } = useContext(TopicContext);

  let currIndex = 0;
  const content = contents.find((cont, index) => {
    currIndex = index;
    return cont.path === "/content/" + params.slug.join("/");
  });

  if (content == undefined) {
    throw new Error("Unable to filter content");
  }
  const title = capitialize(content.title.replaceAll("-", " "));

  return (
    <main className="relative my-4 lg:gap-10 xl:grid xl:grid-cols-[1fr_260px]">
      <div className="mx-auto w-full min-w-0">
        <div className="text-base">
          <CustomBreadcrumb items={[{ name: title, link: content.path }]} />
        </div>

        <div
          className={cn(
            "prose mt-3 max-w-none dark:prose-invert",
            "prose-a:text-blue-500 prose-a:no-underline hover:prose-a:text-blue-400  hover:prose-a:underline hover:prose-a:underline-offset-4",
            "prose-headings:scroll-m-16 prose-headings:capitalize",
            "prose-code:rounded prose-code:border prose-code:bg-muted prose-code:px-[0.3rem] prose-code:py-[0.1rem] prose-code:font-normal prose-code:before:contents prose-code:after:contents",
            "dark:prose-pre:bg-muted"
          )}
        >
          <h1 className="capitalize">{title}</h1>
          <Separator orientation="horizontal" />
          <div dangerouslySetInnerHTML={{ __html: content.body }}></div>
        </div>

        {/* next and prev navigation  */}
        <div className="mt-10 flex justify-between">
          <Button
            variant="outline"
            className={`${currIndex == 0 ? "invisible" : ""}`}
            asChild
            onClick={() =>
              setSelected(
                `${currIndex - 1 >= 0 ? contents[currIndex - 1].path : "/"}`
              )
            }
          >
            <Link
              href={`${currIndex - 1 >= 0 ? contents[currIndex - 1].path : "/"}`}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              {currIndex - 1 >= 0 &&
                capitialize(contents[currIndex - 1].title.replaceAll("-", " "))}
            </Link>
          </Button>
          <Button
            variant="outline"
            className={`${currIndex == contents.length - 1 ? "invisible" : ""}`}
            asChild
            onClick={() =>
              setSelected(
                `${currIndex + 1 < contents.length ? contents[currIndex + 1].path : "/"}`
              )
            }
          >
            <Link
              href={`${currIndex + 1 < contents.length ? contents[currIndex + 1].path : "/"}`}
            >
              {currIndex + 1 < contents.length &&
                capitialize(contents[currIndex + 1].title.replaceAll("-", " "))}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="hidden text-sm xl:block">
        <div className="sticky top-16">
          <Toc html={content.toc} headingIds={content.heading_ids} />
        </div>
      </div>
    </main>
  );
};

export default ContentLayout;
