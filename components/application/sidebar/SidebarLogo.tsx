import Image from "next/image";

export default function SidebarLogo() {
  return (
    <div className="w-full h-24 p-4 flex justify-start items-center ps-8">
      <h1 className="sr-only">Potion</h1>
      <div className="flex items-end gap-2">
        <Image
          src={"/images/logo/base.png"}
          alt="logo"
          width={100}
          height={39}
        />
        <Image src={"/images/logo/Ai.png"} alt="logo" width={31} height={39} />
      </div>
    </div>
  );
}
