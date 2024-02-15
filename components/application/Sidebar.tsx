import { Button } from "@/components/ui/button";
import ChatHistory from "@/components/application/sidebar/ChatHistory";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="w-72 h-dvh flex flex-col z-10 text-white overflow-hidden">
      <div className="w-full h-24 p-4 flex justify-start items-center ps-8">
        <h1 className="sr-only">Potion</h1>
        <Image src={"/images/logo-ai.png"} alt="logo" width={100} height={39} />
      </div>
      <ChatHistory />
      <div className="w-full flex-col p-4 border-t">
        <Button variant="ghost" className="w-full">
          Upgrade Plan
        </Button>
        <Button variant="ghost" className="w-full">
          Monier Herradis
        </Button>
      </div>
    </div>
  );
}
