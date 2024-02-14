import { chatHistory } from "@/mock/chatHistory";
import { Button } from "@/components/ui/button";
import styles from "./scrollbar.module.css";

export default function ChatHistory() {
  return (
    <div
      className={`${styles.scrollbar} w-full flex-col p-4 pe-2 overflow-y-auto`}
    >
      {chatHistory.map((period) => {
        return (
          <div className="flex flex-col mb-6 w-full" key={period.title}>
            <span className="text-sm opacity-45 ms-3 mb-1">{period.title}</span>
            <div className="flex flex-col">
              {period.chats.map((chat) => {
                return (
                  <Button
                    key={chat.id}
                    variant="ghost"
                    className="w-full justify-start "
                  >
                    <span className="w-full overflow-hidden text-ellipsis text-start">
                      {chat.title}
                    </span>
                  </Button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
