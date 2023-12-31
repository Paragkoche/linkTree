import type { Metadata } from "next";
import "./scss/globals.scss";

export const metadata: Metadata = {
  title: "Webstack | Links",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
