'use client'
import Footer from "@/components/ui/footer";

// export const metadata = {
//   title: 'Keploy - Open Source Stubs and API Test Generator for Developer',
//   description: 'Keploy is AI based test case and stubs/mocks generator for e2e testing. 90% test coverage in minutes with open source testing tool',
// }

import Hero from '@/components/stub-generation/hero'
import Features from '@/components/stub-generation/feature'
import ProblemBlocks from '@/components/stub-generation/block'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Language from "@/components/language";
import Community from "@/components/community";
import SocialLinks from "@/components/stub-generation/community"
export default function Home() {
  return (
    <>
        <Hero />
        <ProblemBlocks />
        <Features />
        <SocialLinks/>
        <Language />
        <Newsletter />
        <Footer />
        {/* <Community/> */}
        {/* 
        <Community/>
        <Testimonials />
        <Language />
        <Newsletter />
        <Footer /> */}
    </>
  )
}
