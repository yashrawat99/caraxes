import "./globals.css";
import React from "react";
import { Baloo_2 } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import Providers from "./components/templates/TripTemplate/Provider";

const baloo = Baloo_2({
  weight: ["400", "500", "600", "800", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={baloo.className}>
        <Providers>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
