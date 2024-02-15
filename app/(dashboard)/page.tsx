import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileUp, Mic, Send } from "lucide-react";

export default function Home() {
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
          <Card className="grow w-full flex gap-4 bg-gray-100 dark:bg-gray-900 p-4">
            <Button>Click me</Button>
            <ModeToggle />
          </Card>
          <div className="w-full flex gap-2 mx-2 md:mx-4 lg:mx-auto lg:max-w-2xl xl:max-w-7xl">
            <Card className="w-full flex gap-4 p-2 bg-gray-900 rounded-full">
              <Textarea
                className="rounded-full min-h-1"
                rows={1}
                placeholder="Message Potion here ..."
              />
              <Button size="icon" className="rounded-full">
                <FileUp />
              </Button>
              <Button size="icon" className="rounded-full">
                <Mic />
              </Button>
            </Card>
            <Card className="flex gap-4 p-2 bg-gray-900 rounded-full">
              <Button size="icon" className="rounded-full">
                <Send />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
