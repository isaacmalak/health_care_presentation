import type { Metadata } from "next";
import { Amiri, IBM_Plex_Sans_Arabic, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  variable: "--font-display",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const plexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-body",
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
});

const kufi = Noto_Kufi_Arabic({
  variable: "--font-utility",
  subsets: ["arabic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "نبض — نظام تصميم",
  description: "نبض: الألوان، الطباعة، ومكوّنات الواجهة.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${amiri.variable} ${plexSansArabic.variable} ${kufi.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
