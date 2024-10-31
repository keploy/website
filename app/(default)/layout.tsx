"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";
import KeployStickyBanner from "@/components/ui/bottom-sticky-banner";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <ApolloProvider client={client}>
        <main className="grow bg-neutral-100 z-10">{children}</main>
        <KeployStickyBanner />
        {/*<Footer />*/}
      </ApolloProvider>
    </>
  );
}
