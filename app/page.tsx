'use client'

import LoadingScreen from '@/components/LoadingScreen'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import LogoSection from '@/components/LogoSection'
import ProductsSection from '@/components/ProductsSection'
import PlanSection from '@/components/PlanSection'
import TestimonialSection from '@/components/TestimonialSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import BlogSeection from '@/components/BlogSection'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <LogoSection />
        <ProductsSection />
        <PlanSection />
        <TestimonialSection />
        <BlogSeection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
