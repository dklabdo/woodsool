import { Phone as LucidePhone } from "lucide-react";
import { Instagram } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-main w-full text-white text-base flex flex-row items-center px-4 md:px-12 py-4 gap-4 md:gap-8 min-h-[50px]">
      <div className="flex items-center gap-2">
        <LucidePhone className="w-4 h-4 " />
        <span className="tracking-wide text-xs md:text-sm">
          +213 7 71 64 47 01
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Instagram className="w-4 h-4 " />
        <a
          href="https://www.instagram.com/woodsoul_dz?igsh=NDR2bWJzZ2sybGQ="
          target="_blank"
          rel="noopener noreferrer"
          className="tracking-wide text-xs md:text-sm hover:underline"
        >
          WoodSoul Dz
        </a>
      </div>
    </div>
  );
};

export default TopBar;
