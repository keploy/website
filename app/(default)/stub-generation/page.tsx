'use client'
import Footer from "@/components/ui/footer";
import Hero from '@/components/stub-generation/hero'
import Features from '@/components/stub-generation/feature'
import ProblemBlocks from '@/components/stub-generation/block'
import Banner from '@/components/stub-generation/banner'
import Language from "@/components/language";
import SocialLinks from "@/components/stub-generation/community"
export default function Home() {
  return (
    <>
        <Hero />
        <ProblemBlocks />
        <Features />
        <SocialLinks/>
        <Language />
        <Banner />
        <Footer />
    </>
  )
}
