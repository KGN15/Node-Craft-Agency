import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata = {
  title: "Blog | NodeCraft Agency",
  description:
    "Read web development & business growth tips, SEO guides, business strategies and design insights from NodeCraft Agency.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
