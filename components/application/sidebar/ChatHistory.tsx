import { chatHistory } from "@/mock/chatHistory";
import styles from "./scrollbar.module.css";
import ChatHistoryItem from "./ChatHistoryItem";

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
                return <ChatHistoryItem key={chat.id} chat={chat} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
