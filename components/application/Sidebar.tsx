import SidebarLogo from "@/components/application/sidebar/SidebarLogo";
import ChatHistory from "@/components/application/sidebar/ChatHistory";
import UpgradeButton from "@/components/application/sidebar/UpgradeButton";
import UserDropdown from "@/components/application/sidebar/UserDropdown";

export default function Sidebar() {
  return (
    <div className="w-72 h-dvh flex flex-col z-10 text-white overflow-hidden">
      <SidebarLogo />
      <ChatHistory />
      <div className="w-full flex-col p-4 pe-2 border-t">
        <UpgradeButton />
        <UserDropdown />
      </div>
    </div>
  );
}
