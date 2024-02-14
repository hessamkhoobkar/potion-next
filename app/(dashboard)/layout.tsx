import Sidebar from "@/components/application/Sidebar";
import Image from "next/image";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-dvh flex">
      <div className="fixed inset-0 z-0 bg-gray-950">
        <Image
          src={"/images/body-bg.jpg"}
          alt="page background. for visuals only"
          fill
          className="fixed inset-0 z-0 opacity-10 object-cover"
        />
      </div>
      <Sidebar />
      <div className="grow z-10">{children}</div>
    </div>
  );
}
