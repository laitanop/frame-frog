import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta
          name="fc:frame:image"
          content={`${process.env.VERCEL_URL || "http://localhost:3000"}/api`}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
