import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-4">
        <Button>Click me</Button>
        <ModeToggle />
      </div>
    </main>
  );
}
