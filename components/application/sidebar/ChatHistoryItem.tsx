import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export default function ChatHistoryItem({
  chat,
}: {
  chat: { id: string; title: string };
}) {
  return (
    <Button
      key={chat.id}
      variant="ghost"
      className="w-full justify-start relative group"
    >
      <span className="w-full overflow-hidden text-ellipsis text-start">
        {chat.title}
      </span>

      <div className="absolute inset-y-0 end-0 flex flex-row-reverse justify-start items-center bg-gradient-to-l from-background via-background/80 w-1/3 opacity-0 group-hover:opacity-100">
        <Button key={chat.id} size="sm" variant="ghost" className="py-1">
          <Trash className="w-4 h-4" />
        </Button>
      </div>
    </Button>
  );
}
