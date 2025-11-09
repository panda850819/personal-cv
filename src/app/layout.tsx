import type { Metadata } from "next";
import { Inter, Space_Grotesk, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-tc",
});

export const metadata: Metadata = {
  title: "Panda Tseng | Crypto PM · Builder · KOL",
  description: "Building the bridge between TradFi & Web3. Explore my journey from $500 to a million-dollar portfolio.",
  keywords: ["Web3", "Crypto", "Product Manager", "DeFi", "Blockchain", "KOL"],
  authors: [{ name: "Panda Tseng" }],
  openGraph: {
    title: "Panda Tseng | Crypto PM · Builder · KOL",
    description: "Building the bridge between TradFi & Web3",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${inter.variable} ${spaceGrotesk.variable} ${notoSansTC.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
