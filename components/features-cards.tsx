import React from "react";
import { LucideIcon } from "lucide-react";
import {
  SquareDashedBottomCode,
  CodeIcon,
  Wrench,
  Rss,
  NotebookPen,
  PanelRightClose,
} from "lucide-react";

export interface FeaturesCardsProps {
  title: string;
  link: string;
  icon: LucideIcon;
  description: string;
}

const FeaturesCards = () => {
  const features: FeaturesCardsProps[] = [
    {
      title: "Algorithms",
      icon: SquareDashedBottomCode,
      link: "",
      description:
        "String Manipulation, Graphs, Dynamic Programming, Greedy etc.",
    },
    {
      title: "Interview",
      icon: CodeIcon,
      link: "",
      description:
        "Solved problems from Leetcode, Interviewbit, Atcoder and other.",
    },
    {
      title: "Dev Tools",
      icon: Wrench,
      link: "",
      description:
        "Developer tools for formatting and editing JSON, Text Search etc.",
    },
    {
      title: "Blogs",
      icon: Rss,
      link: "",
      description: "Programming blogs on various topics for software developer",
    },
    {
      title: "Notes",
      icon: NotebookPen,
      link: "",
      description: "Short notes on various topics for easy lookup",
    },
    {
      title: "Emacs",
      icon: PanelRightClose,
      link: "",
      description:
        "Setting up Emacs, Custom configs for improving productivity",
    },
  ];

  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
      {features.map((feature, index) => {
        return (
          <div key={index} className="rounded-lg border bg-card p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <feature.icon className="text-primary" />
                <h3 className="font-bold capitalize">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesCards;
