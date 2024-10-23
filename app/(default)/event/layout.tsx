import Header from './_components/header'

import { Inter, Architects_Daughter } from 'next/font/google'


const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
})


const architects_daughter = Architects_Daughter({
    subsets: ['latin'],
    variable: '--font-architects-daughter',
    weight: '400',
    display: 'swap'
})

export const metadata = {
    title: "Events | Keploy",
    description: "Keploy is your open-source, developer-centric backend testing tool. It makes backend testing easy and productive for engineering teams. Plus, it's easy-to-use, powerful and extensible. 🛠️Keploy creates test cases and data mocks/stubs from user-traffic by recording API calls and DB queries, significantly speeding up releases and enhancing reliability. 📈"
}

export default function EventLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased tracking-tight`}>
                <Header />
                <div className="flex flex-col min-h-screen overflow-hidden container mx-auto">
                    {children}
                </div>
            </body>
        </html>
    )
}