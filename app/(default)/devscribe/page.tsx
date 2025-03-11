import Footer from "@/components/devscribe/footer";

export const metadata = {
    title: 'Home - Open PRO',
    description: 'Page description',
}

import Hero from '@/components/devscribe/hero'
import Features from '@/components/devscribe/features'
import Testimonials from '@/components/devscribe/testimonials'

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <Testimonials />
            <Footer />
        </>
    )
}
