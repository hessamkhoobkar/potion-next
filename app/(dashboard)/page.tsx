import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
          <div className="w-full flex gap-4">
            <Button>Click me</Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </main>
  );
}
