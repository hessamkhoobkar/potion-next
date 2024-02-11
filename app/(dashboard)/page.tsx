import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="w-full h-full flex justify-center items-center p-4 bg-[color:var(--background)] border border-gray-300 dark:border-gray-800 rounded-3xl">
        <div className="flex gap-4">
          <Button>Click me</Button>
          <ModeToggle />
        </div>
      </div>
    </main>
  );
}
