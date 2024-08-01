import "./css/styles.css";

import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({children}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>WebStories for Software Testing</title>
      <body
        className={` ${inter.className} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <div className={`flex flex-col min-h-screen  `}>
          {children}
        </div>
      </body>
    </html>
  );
}
