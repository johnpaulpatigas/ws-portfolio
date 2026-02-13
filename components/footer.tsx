import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 py-4">
      <Separator />
      <div className="flex justify-center gap-4">
        <Button asChild variant="ghost" size="icon">
          <Link href="https://github.com" target="_blank">
            <HugeiconsIcon icon={GithubIcon} />
          </Link>
        </Button>
        <Button asChild variant="ghost" size="icon">
          <Link href="https://linkedin.com" target="_blank">
            <HugeiconsIcon icon={LinkedinIcon} />
          </Link>
        </Button>
        <Button asChild variant="ghost" size="icon">
          <Link href="https://twitter.com" target="_blank">
            <HugeiconsIcon icon={TwitterIcon} />
          </Link>
        </Button>
      </div>
      <div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} John Paul Patigas
        </p>
      </div>
    </footer>
  );
}
