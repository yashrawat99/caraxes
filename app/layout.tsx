import "./globals.css";
import { Baloo_2 } from "next/font/google";

const baloo = Baloo_2({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={baloo.className}>{children}</body>
    </html>
  );
}
