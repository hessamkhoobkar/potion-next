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
    <main className="grow flex flex-col gap-4">
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
    </main>
  );
}
