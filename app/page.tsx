import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Writing", href: "/writing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// JSON-LD Person schema. Tells Google this site is the authoritative source
// for the entity "Arnav Kumar, Founding engineer". Critical for ranking on
// the name itself plus name + role combinations.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arnav Kumar",
  alternateName: "Arnav",
  url: "https://arnavkumar.in",
  image: "https://arnavkumar.in/og.png",
  jobTitle: "Founding Engineer",
  description:
    "Founding engineer based in Mumbai. Built and runs leohydra.com end to end, a Dubai art studio doing 40 to 50 orders a day during drop weeks.",
  worksFor: {
    "@type": "Organization",
    name: "Leo Hydra Studio",
    url: "https://leohydra.com",
    location: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: "Dubai" },
    },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Supabase",
    "Web3 payments",
    "USDT on Polygon",
    "Meta Conversions API",
    "Production e-commerce engineering",
    "Security hardening",
  ],
  sameAs: [
    "https://www.linkedin.com/in/arnav-kumar1/",
    "https://github.com/Arnav-Kumar1",
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="w-screen h-0.5 md:h-px animate-glow animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-100/70 md:via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl lg:text-9xl whitespace-nowrap bg-clip-text ">
        Arnav Kumar
      </h1>

      <div className="w-screen h-0.5 md:h-px animate-glow animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-100/70 md:via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in max-w-2xl px-6">
        <h2 className="text-sm text-zinc-500 leading-relaxed">
          Founding engineer. I built{" "}
          <Link
            target="_blank"
            href="https://leohydra.com"
            className="underline duration-500 hover:text-zinc-300"
          >
            leohydra.com
          </Link>
          {" "}from scratch and run all of it. Drop weeks clear 40 to 50 orders a day. Every drop sells out inside 7 days.
        </h2>
      </div>
    </div>
  );

}
