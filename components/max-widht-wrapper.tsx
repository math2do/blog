import React from "react";
import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // "mx-auto max-w-full md:max-w-[95%] lg:max-w-[95%] xl:max-w-[90%]",
        "mx-auto max-w-full md:max-w-[90%] lg:max-w-[80%]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
