"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Keyboard, LifeBuoy, LogOut, Settings } from "lucide-react";

const menuContent = [
  {
    label: "Help & FAQ",
    icon: <LifeBuoy className="h-4 w-4" />,
  },
  {
    label: "Keyboard shortcuts",
    icon: <Keyboard className="h-4 w-4" />,
    shortcut: "⌘K",
  },
  {
    label: "Settings",
    icon: <Settings className="h-4 w-4" />,
    shortcut: "⌘S",
  },
];

export default function UserDropdown() {
  const menuItems = menuContent.map(({ label, icon, shortcut }) => (
    <DropdownMenuItem key={label}>
      {icon}
      <span className="ms-3">{label}</span>
      {shortcut && <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>}
    </DropdownMenuItem>
  ));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="w-full h-auto justify-start gap-4 p-2 focus-visible:ring-accent"
        >
          <UserInformation />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-64">
        {menuItems}
        <DropdownMenuSeparator />
        <LogoutMenuItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function LogoutMenuItem() {
  return (
    <DropdownMenuItem>
      <LogOut className="h-4 w-4" />
      <span className="ms-3">Log out</span>
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  );
}

function UserInformation() {
  return (
    <>
      <Avatar>
        <AvatarImage src="/images/profile.png" alt="Tara Monier" />
        <AvatarFallback>TM</AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-start items-start">
        <span className="text-base">Tara Monier</span>
        <span className="text-xs text-gray-500">TaraMonier@dayrep.com</span>
      </div>
    </>
  );
}
