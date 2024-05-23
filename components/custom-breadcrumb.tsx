import React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

interface BreadcrumbProps {
  items: {
    name: string;
    link: string;
  }[];
}

// For showing ui componenets like: Docs > System Design > Tiny URL
const CustomBreadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/content">Notes</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />

        {/* add links in between except the last one  */}
        {items.map((item, index) => {
          return (
            index < items.length - 1 && (
              <>
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink href={item.link}>{item.name}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            )
          );
        })}

        {/* add last one here  */}
        <BreadcrumbItem>
          <BreadcrumbPage>{items[items.length - 1].name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
