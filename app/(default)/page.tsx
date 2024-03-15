import Footer from "@/components/ui/footer";

export const metadata = {
  title: 'Keploy - Open Source Stubs and API Test Generator for Developer',
  description: 'Keploy is AI based test case and stubs/mocks generator for e2e testing. 90% test coverage in minutes with open source testing tool',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import ProblemBlocks from '@/components/problem-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Language from "@/components/language";
import Community from "@/components/community";

export default function Home() {
  return (
    <>
        <Hero />
        <ProblemBlocks />
        <Features />
        <Community/>
        <Testimonials />
        <Language />
        <Newsletter />
        <Footer />
    </>
  )
}
