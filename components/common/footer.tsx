import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 py-4 mt-auto">
      <Separator />
      <div className="flex justify-center gap-4">
        <Button variant="ghost" size="icon">
          <Link href="https://github.com/johnpaulpatigas" target="_blank">
            <HugeiconsIcon icon={GithubIcon} />
          </Link>
        </Button>
        <Button variant="ghost" size="icon">
          <Link href="https://linkedin.com" target="_blank">
            <HugeiconsIcon icon={LinkedinIcon} />
          </Link>
        </Button>
        <Button variant="ghost" size="icon">
          <Link href="mailto:johnpaulpatigas@gmail.com">
            <HugeiconsIcon icon={MailIcon} />
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
