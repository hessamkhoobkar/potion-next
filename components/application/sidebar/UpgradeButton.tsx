"use client";

import { cn } from "@/lib/utils";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { BrainCircuit } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function UpgradeButton() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-full h-auto justify-start gap-4 p-2 focus-visible:ring-accent"
        >
          <Avatar>
            <AvatarFallback className="w-10 h-10 bg-background border border-border">
              <BrainCircuit className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col justify-start items-start">
            <span className="text-base">Upgrade your plan</span>
            <span className="text-xs text-gray-500">
              Access more all models
            </span>
          </div>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <ProfileForm />
      </DialogContent>
    </Dialog>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
}
