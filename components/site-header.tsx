import { Terminal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/svg-icons";
import { siteConfig } from "@/config/site";
import ThemeToggler from "@/components/theme-toggler";
import { Separator } from "@/components/ui/separator";
import MaxWidthWrapper from "./max-width-wrapper";
import React from "react";
import MobileNav from "./mobile-nav";
import { CommandMenu } from "./commend-menu";
import Profile from "./profile";

const SiteHeader = async () => {
  return (
    <section className="sticky top-0 z-50 w-full backdrop-blur-xl backdrop-opacity-100">
      <MaxWidthWrapper>
        <nav className="flex w-full items-center px-4 py-1 sm:py-0 md:px-0">
          <Link href="/" className="hidden md:block">
            <div className="flex cursor-pointer items-end text-xl">
              <Terminal className="h-full w-full" />
              <h1 className="font-bold">
                <span className="text-primary">math</span>
                <span>2do</span>
              </h1>
            </div>
          </Link>

          <div className="md:hidden">
            <MobileNav />
          </div>

          <div className="ml-10 flex h-full flex-1 items-center justify-end">
            <div className="mr-3 flex-1 md:flex-none">
              <CommandMenu />
            </div>
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="hidden pl-3 sm:inline-block"
              >
                <a href={siteConfig.links.github}>
                  <Icons.gitHub className="h-4 w-4" />
                </a>
              </Button>
              <div className="hidden sm:inline-block">
                <ThemeToggler />
              </div>
            </div>
            <Separator
              orientation="vertical"
              className="mx-6 hidden h-6 sm:inline-block"
            />
            <Profile />
          </div>
        </nav>
      </MaxWidthWrapper>
      <Separator className="h-[0.1px] bg-muted" />
    </section>
  );
};

export default SiteHeader;
