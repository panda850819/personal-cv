import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-tc",
});

export const metadata: Metadata = {
  title: "panda@cv ~ %",
  description: "Panda Tseng | Crypto PM, Builder, KOL — Terminal CV",
  keywords: ["Web3", "Crypto", "Product Manager", "DeFi", "Blockchain", "KOL"],
  authors: [{ name: "Panda Tseng" }],
  metadataBase: new URL("https://pandatseng.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "panda@cv ~ % whoami",
    description: "Panda Tseng — Building the bridge between TradFi & Web3",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${jetbrainsMono.variable} ${notoSansTC.variable}`}>
      <body>{children}</body>
    </html>
  );
}
