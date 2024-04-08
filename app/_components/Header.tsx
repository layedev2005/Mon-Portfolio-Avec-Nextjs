import { Section } from "./Section";
import { buttonVariants } from "@/components/ui/button"
import { GithubIcon } from "./icons/GithubIcon";
import { cn } from "@/lib/utils";
import Link from "next/link"


export const  Header = () => {
  return (
    <header className="sticky top-0 py-4">
        <section className="flex items-baseline ">
            <h1 className="text-lg font-bold text-primary">Xalima.com</h1>
            <div className="flex-1 ">
                <ul>
                    <Link
                        href="/"
                         className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}>
                        <GithubIcon size={12} className="text-foreground"/>
                    </Link>
                </ul>
            </div>
        </section>
    </header>
  )
}
