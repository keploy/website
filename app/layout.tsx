import "./css/style.css";

import { DM_Sans, Roboto } from "next/font/google";
import Script from "next/script";
import Head from "next/head";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  display: "swap",
});

// export const metadata = {
//   title: "Keploy",
//   description: "",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preconnect"
          href="https://js-na1.hs-scripts.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://js-na1.hs-scripts.com" />

        {/* Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TLL6DW2H6N"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TLL6DW2H6N');
            `,
          }}
        />

        {/* Microsoft Clarity */}
        <Script
          id="clarity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "iu0391ggta");
            `,
          }}
        />

        {/* HubSpot */}
        <Script
          id="hubspot-init"
          src="//js-na1.hs-scripts.com/43912677.js"
          strategy="afterInteractive"
          async
          defer
        />

        {/* Apollo Tracker */}
        <Script
          id="apollo-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function initApollo() {
                var n = Math.random().toString(36).substring(7);
                var o = document.createElement("script");
                o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n;
                o.async = true;
                o.defer = true;
                o.onload = function() {
                  window.trackingFunctions.onLoad({ appId: "6644a0d6a54b5b0438c841cc" });
                };
                document.head.appendChild(o);
              })();
            `,
          }}
        />

        {/* Vector */}
        <Script
          id="vector-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,r){try{if(e.vector)return void console.log("Vector snippet included more than once.");var t={};t.q=t.q||[];for(var o=["load","identify","on"],n=function(e){return function(){var r=Array.prototype.slice.call(arguments);t.q.push([e,r])}},c=0;c<o.length;c++){var a=o[c];t[a]=n(a)}if(e.vector=t,!t.loaded){var i=r.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://cdn.vector.co/pixel.js";var l=r.getElementsByTagName("script")[0];l.parentNode.insertBefore(i,l),t.loaded=!0}}catch(e){console.error("Error loading Vector:",e)}}(window,document);
              vector.load("95211152-727d-4d43-9512-592ca65a1401");
            `,
          }}
        />
      </Head>
      <body
        className={`${dmSans.variable} ${roboto.variable} font-dm-sans antialiased bg-neutral-50 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
