export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-dvh flex">
      <div className="w-72 p-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ab
          ipsum! Voluptatum ipsam laboriosam ea illo excepturi recusandae
          consectetur pariatur quisquam at dicta inventore dolorum, molestiae
          velit doloribus praesentium et?
        </p>
      </div>
      <div className="grow">{children}</div>
    </div>
  );
}
