"use client";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FileUp, Mic, Send } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [position, setPosition] = useState("pro");

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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <div className="flex items-end gap-2">
                    <Image
                      src={"/images/logo/Potion.png"}
                      alt="logotype - word potion"
                      width={64}
                      height={30}
                    />
                    <Image
                      src={"/images/logo/Pro.png"}
                      alt="logotype - word lite"
                      width={28}
                      height={15}
                    />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="lite">
                    <div className="flex flex-col gap-2 pt-2">
                      <div className="flex items-end gap-2">
                        <Image
                          src={"/images/logo/Potion.png"}
                          alt="logotype - word potion"
                          width={64}
                          height={30}
                        />
                        <Image
                          src={"/images/logo/Lite.png"}
                          alt="logotype - word lite"
                          width={28}
                          height={15}
                        />
                      </div>
                      <span className="text-sm opacity-50">Our base modal</span>
                    </div>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="pro">
                    <div className="flex flex-col gap-2 pt-2">
                      <div className="flex items-end gap-2">
                        <Image
                          src={"/images/logo/Potion.png"}
                          alt="logotype - word potion"
                          width={64}
                          height={30}
                        />
                        <Image
                          src={"/images/logo/Pro.png"}
                          alt="logotype - word lite"
                          width={28}
                          height={15}
                        />
                      </div>
                      <span className="text-sm opacity-50">Our base modal</span>
                    </div>
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="max">
                    <div className="flex flex-col gap-2 pt-2">
                      <div className="flex items-end gap-2">
                        <Image
                          src={"/images/logo/Potion.png"}
                          alt="logotype - word potion"
                          width={64}
                          height={30}
                        />
                        <Image
                          src={"/images/logo/Max.png"}
                          alt="logotype - word lite"
                          width={28}
                          height={15}
                        />
                      </div>
                      <span className="text-sm opacity-50">Our base modal</span>
                    </div>
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="ms-auto bg-gradient-to-br from-primary to-secondary font-bold">
              Start new Chat
            </Button>
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
            </Card>
            <Button
              size="icon"
              className="bg-gradient-to-br from-primary to-secondary font-bold"
            >
              <Send className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
