import Image from "next/image";

import { cn } from "@/lib/utils";
import Icons from "@/components/ui/icons";

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="relative h-[80px] w-[80px] rounded-full bg-muted p-1">
        <Icons.Spooky className="h-full w-full" />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xl font-semibold">Gamehub</p>
        <p className="text-sm text-muted-foreground">Let&apos;s play</p>
      </div>
    </div>
  );
};
