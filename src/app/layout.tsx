import type { Metadata } from "next";

import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "A React Application Template for large scale apps",
  description: "A React Application Template for large scale apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased p-4`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
