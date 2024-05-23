import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ExternalLinkProps
  extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children?: React.ReactNode;
}

export default function ExternalLink({
  href,
  className,
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <div className="inline-block text-blue-500 transition-all hover:text-blue-400 hover:underline hover:underline-offset-4">
      <a href={href} target="_blank" className={cn("", className)} {...props}>
        {children}
        <ArrowUpRight
          className="inline-block -translate-x-1 -translate-y-1"
          height={15}
        />
      </a>
    </div>
  );
}
