import Link from "next/link";
import MaxWidthWrapper from "@/components/max-widht-wrapper";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/svg-icons";

import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
  PageActions,
} from "@/components/page-header";
import FeaturesCards from "@/components/features-cards";

export default async function Home() {
  return (
    <MaxWidthWrapper>
      <PageHeader>
        <PageHeaderHeading>Welcome To math2do</PageHeaderHeading>
        <PageHeaderDescription>{siteConfig.description}</PageHeaderDescription>
        <PageActions>
          <Link
            href="/content/getting-started"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Explore
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </PageActions>
      </PageHeader>

      <div className="md:py-15 space-y-6 bg-muted px-4 py-10 lg:py-20">
        <div className="text-center">
          <PageHeaderHeading className="text-2xl md:text-4xl">
            Features
          </PageHeaderHeading>
          <PageHeaderDescription className="text-lg md:text-xl">
            {siteConfig.features}
          </PageHeaderDescription>
        </div>
        <FeaturesCards />
      </div>
    </MaxWidthWrapper>
  );
}
