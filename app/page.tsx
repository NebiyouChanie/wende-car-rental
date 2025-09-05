import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { ArrowRight, Instagram, Linkedin, Twitter, Facebook, ShieldCheck, Eye, Scale, Home } from "lucide-react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import WhyusSection from "@/components/why-us-section"
import TestimonialSection from "@/components/testimonial-section"
import CTASection from "@/components/cta-section"
import Location from "@/components/location"
import CarsSection from "@/components/cars-section"
import RentalProcessSection from "@/components/steps-section"
import Footer from "@/components/footer"
import ServicesSection from "@/components/services-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-dark-background text-light-text">
      {/* Header/Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />
      
      {/* Why Choose Us Section (repurposed from Services) */}
      <WhyusSection />

      {/* cars seciton */}
      <CarsSection />

      {/* services section */}
      <ServicesSection />

      {/* Featured Listings Section (repurposed from Our Work) */}
      {/* <section className="py-16 md:py-24 lg:py-32 max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-sm font-light uppercase text-subtle-gray mb-2">Exclusive</div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-12">Featured Listings</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <div className="relative w-full h-[250px] mb-4">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Luxury Villa"
                fill
                className="object-cover object-center"
              />
            </div>
            <h3 className="text-xl font-light mb-2">Spacious Villa in Bole</h3>
            <p className="text-sm text-subtle-gray mb-2">Price: $1,500,000</p>
            <p className="text-sm text-subtle-gray mb-4">Location: Bole, Addis Ababa</p>
            <Link href="#" className="text-sm font-light uppercase hover:text-subtle-gray transition-colors">
              View Details
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="relative w-full h-[250px] mb-4">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Modern Apartment"
                fill
                className="object-cover object-center"
              />
            </div>
            <h3 className="text-xl font-light mb-2">Modern Apartment in Summit</h3>
            <p className="text-sm text-subtle-gray mb-2">Price: $750,000</p>
            <p className="text-sm text-subtle-gray mb-4">Location: Summit, Addis Ababa</p>
            <Link href="#" className="text-sm font-light uppercase hover:text-subtle-gray transition-colors">
              View Details
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="relative w-full h-[250px] mb-4">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Luxury Penthouse"
                fill
                className="object-cover object-center"
              />
            </div>
            <h3 className="text-xl font-light mb-2">Luxury Penthouse near Old Airport</h3>
            <p className="text-sm text-subtle-gray mb-2">Price: $2,200,000</p>
            <p className="text-sm text-subtle-gray mb-4">Location: Old Airport, Addis Ababa</p>
            <Link href="#" className="text-sm font-light uppercase hover:text-subtle-gray transition-colors">
              View Details
            </Link>
          </div>
        </div>
      </section> */}

      {/* Neighborhoods Section (new section) */}
      {/* <section className="py-16 md:py-24 lg:py-32 max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-sm font-light uppercase text-subtle-gray mb-2">Explore</div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-12">
          Addis Ababa&apos;s Premier Neighborhoods
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-4 border border-subtle-gray rounded-sm">
            <h3 className="text-2xl font-light mb-2">Bole</h3>
            <p className="text-sm text-subtle-gray">Vibrant commercial and residential hub</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 border border-subtle-gray rounded-sm">
            <h3 className="text-2xl font-light mb-2">Summit</h3>
            <p className="text-sm text-subtle-gray">Modern developments and serene living</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 border border-subtle-gray rounded-sm">
            <h3 className="text-2xl font-light mb-2">CMC</h3>
            <p className="text-sm text-subtle-gray">Family-friendly with amenities and schools</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 border border-subtle-gray rounded-sm">
            <h3 className="text-2xl font-light mb-2">Old Airport</h3>
            <p className="text-sm text-subtle-gray">Established, prestigious diplomatic area</p>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section (repurposed from Completed Projects) */}
       <TestimonialSection />

      {/* Partners Section (repurposed from Discuss Your Project) */}
      {/* <section className="py-16 md:py-24 lg:py-32 max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-sm font-light uppercase text-subtle-gray mb-2">Collaborations</div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-12">Our Esteemed Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          <div className="relative w-full h-24 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=100&width=200"
              alt="Construction Company Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-full h-24 flex items-center justify-center">
            <Image src="/placeholder.svg?height=100&width=200" alt="Bank Logo" fill className="object-contain" />
          </div>
          <div className="relative w-full h-24 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=100&width=200"
              alt="Architect Firm Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-full h-24 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=100&width=200"
              alt="Interior Design Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section> */}

      {/* Contact Section (repurposed from Contacts) */}

      {/* steps section */}
      <RentalProcessSection />

      {/* cta */}
      <CTASection />

      {/* location */}
      {/* <Location /> */}

      {/* Footer */}
      <Footer />
    </div>
  )
}
