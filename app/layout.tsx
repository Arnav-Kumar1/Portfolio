import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Arnav Kumar — Generalist Founding Operator",
    template: "%s | Arnav Kumar",
  },
  description:
    "Engineer + growth + ops in one. Currently running a one-principal art business from Mumbai while the founder is in Dubai. Open to founding-engineer / first-non-founder roles at Series A–B startups.",
  openGraph: {
    title: "Arnav Kumar — Generalist Founding Operator",
    description:
      "Engineer + growth + ops in one. Currently running a one-principal art business from Mumbai while the founder is in Dubai. Open to founding-engineer / first-non-founder roles at Series A–B startups.",
    url: "https://arnav.kumar",
    siteName: "Arnav Kumar",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Arnav Kumar",
    card: "summary_large_image",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
