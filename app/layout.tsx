import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Arnav Kumar, Full-stack engineer",
    template: "%s | Arnav Kumar",
  },
  description:
    "Full-stack engineer based in Mumbai. I built leohydra.com from scratch and run all of it, from the code to the ad campaigns. Drop weeks clear 40 to 50 orders a day. Every limited edition drop (six prints, edition of 50, 300 units) sells out inside 7 days. Looking for senior IC or early-team engineering roles.",
  openGraph: {
    title: "Arnav Kumar, Full-stack engineer",
    description:
      "Full-stack engineer based in Mumbai. I built leohydra.com from scratch and run all of it, from the code to the ad campaigns. Drop weeks clear 40 to 50 orders a day. Every limited edition drop (six prints, edition of 50, 300 units) sells out inside 7 days. Looking for senior IC or early-team engineering roles.",
    url: "https://portfolio-arnav-kumar.vercel.app",
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
