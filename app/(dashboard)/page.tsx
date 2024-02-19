"use client";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FileUp, Mic, Send } from "lucide-react";

export default function Home() {
  const autoGrow = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(parseInt(e.target.style.height));

    e.target.style.height =
      parseInt(e.target.style.height) >= 480
        ? "480px"
        : `${e.target.scrollHeight}px`;
  };

  return (
    <main className="w-full h-full flex flex-col items-center justify-center p-2">
      <div className="w-full h-full flex p-4 ps-0 bg-background border border-gray-300 dark:border-gray-800 rounded-3xl">
        <div className="w-8 flex justify-start items-center ps-2 group cursor-pointer">
          <div className="w-1 h-12 bg-gray-800 rounded-full group-hover:bg-gray-300 transition-colors duration-200 ease-in-out"></div>
        </div>
        <div className="grow flex flex-col gap-4">
          <div className="w-full flex gap-4">
            <Button>Click me</Button>
            <ModeToggle />
          </div>
          <Card className="grow w-full flex gap-4 p-4 dark:border-gray-900">
            <Button>Click me</Button>
            <ModeToggle />
          </Card>
          <div className="w-full flex items-end gap-2 mx-2 md:mx-4 lg:mx-auto lg:max-w-2xl xl:max-w-7xl">
            <Card className="w-full flex items-end gap-4 p-2">
              <Textarea
                placeholder="Message Potion here ..."
                className="min-h-1 overflow-y-auto"
                spellCheck="true"
                rows={1}
                onInput={autoGrow}
              />
              <Button size="icon" variant="ghost">
                <FileUp />
              </Button>
              <Button size="icon" variant="ghost">
                <Mic />
              </Button>
              <Button size="icon">
                <Send className="w-6 h-6" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
