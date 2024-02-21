import { Button } from "@/components/ui/button";
import ChatHistory from "@/components/application/sidebar/ChatHistory";
import Image from "next/image";
import { UserDropdown } from "./sidebar/UserDropdown";

export default function Sidebar() {
  return (
    <div className="w-72 h-dvh flex flex-col z-10 text-white overflow-hidden">
      <div className="w-full h-24 p-4 flex justify-start items-center ps-8">
        <h1 className="sr-only">Potion</h1>
        <div className="flex items-end gap-2">
          <Image
            src={"/images/logo/base.png"}
            alt="logo"
            width={100}
            height={39}
          />
          <Image
            src={"/images/logo/Ai.png"}
            alt="logo"
            width={31}
            height={39}
          />
        </div>
      </div>
      <ChatHistory />
      <div className="w-full flex-col p-4 border-t">
        <Button variant="ghost" className="w-full">
          Upgrade Plan
        </Button>
        <UserDropdown />
      </div>
    </div>
  );
}
