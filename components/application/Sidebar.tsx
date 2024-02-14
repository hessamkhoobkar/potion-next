import { Button } from "@/components/ui/button";
import ChatHistory from "@/components/application/sidebar/ChatHistory";

export default function Sidebar() {
  return (
    <div className="w-72 h-dvh flex flex-col z-10 text-white overflow-hidden">
      <div className="w-full h-24 p-4">
        <Button variant="ghost" className="w-full">
          New chat
        </Button>
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