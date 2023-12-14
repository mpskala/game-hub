import Link from "next/link";
import Icons from "@/components/ui/icons";

export const Logo = () => {
  return (
    <Link href="/" className="">
      <div className="flex items-center gap-x-4 transition hover:opacity-75">
        <div className="relative mr-12 h-8 w-8 shrink-0 rounded-full bg-white p-1 lg:mr-0 lg:shrink">
          <Icons.Spooky className="text-black" />
        </div>
        <div className="hidden lg:block">
          <p className="text-lg font-semibold">Gamehub</p>
          <p className="text-xs text-muted-foreground">Let&apos;s play</p>
        </div>
      </div>
    </Link>
  );
};
