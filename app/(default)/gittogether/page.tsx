import Footer from "@/components/conf/footer";

export const metadata = {
    title: 'Home - Open PRO',
    description: 'Page description',
}

import Hero from '@/components/conf/hero'
import Features from '@/components/conf/features'
import Newsletter from '@/components/conf/newsletter'
import Zigzag from '@/components/conf/zigzag'
import Testimonials from '@/components/conf/testimonials'

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            {/*<Zigzag />*/}
            <Testimonials />
            <Newsletter />
            <Footer />
        </>
    )
}
