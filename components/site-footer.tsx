import React from "react";
import { siteConfig } from "@/config/site";
import MaxWidthWrapper from "./max-widht-wrapper";
import ExternalLink from "./external-link";

const SiteFooter = () => {
  return (
    <section className="border-t-[0.1px] border-muted py-4 sm:py-6">
      <MaxWidthWrapper>
        <div className="text-balance text-center text-sm leading-7 text-muted-foreground sm:text-left">
          Built by{" "}
          <a
            href={siteConfig.links.portFolio}
            className="text-foreground  underline underline-offset-4"
          >
            math2do
          </a>{" "}
          using NEXT.js. Source code is available on{" "}
          <ExternalLink href={siteConfig.links.github}>Github</ExternalLink>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default SiteFooter;
