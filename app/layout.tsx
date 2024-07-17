import './css/style.css';
import { Inter } from 'next/font/google';
import Header from '@/components/ui/header';
import React, { ReactNode } from 'react';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export interface Metadata {
  title: string;
  keywords?: string;
  description?: string;
  image?: string;
}

export const defaultMetadata: Metadata = {
  title: 'Keploy | Open Source Stubs and API Test Generator for Developer',
  keywords: "API testing, e2e Testing, ai testing, open source ai testing tool, Service Mocking, Dependency Mocking",
  description: 'Keploy is AI based test case and stubs/mocks generator for e2e testing. 90% test coverage in minutes with open source testing tool',
  image: "images/logo.svg",
};

interface RootLayoutProps {
    children: ReactNode;
    metadata?: Metadata;
}

export default function RootLayout({ children, metadata }: RootLayoutProps) {
  const finalMetadata = {
    title: metadata?.title || defaultMetadata.title,
    keywords: metadata?.keywords || defaultMetadata.keywords,
    description: metadata?.description || defaultMetadata.description,
    image: metadata?.image || defaultMetadata.image,
  };
  return (
    <html lang="en">
      <head>
        <title>{finalMetadata.title}</title>
        <meta name="keywords" content={finalMetadata.keywords} />
        <meta name="description" content={finalMetadata.description} />
        <meta property="og:image" name="image" content={finalMetadata.image} />
        <meta name='twitter:card' content={finalMetadata.image} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TLL6DW2H6N"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TLL6DW2H6N');
            `,
                }}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3609484,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
                }}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a.q=c[a.q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "iu0391ggta");
            `,
                }}
            />
            <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/43912677.js"></script>

            <script
                dangerouslySetInnerHTML={{
                    __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P7DBR4PH');
            `,
                }}
            />

        </head>
        <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Header />
            {children}
        </div>
        </body>
        </html>
    );
}