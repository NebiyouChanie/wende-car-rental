'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { useState, useRef, useEffect } from "react"
import { useI18n } from "@/lib/i18n"

const carBrands = [
  {
    id: 1,
    name: "Mercedes-Benz",
    tagline: "The Best or Nothing",
    image: "/hero22.png",
  },
  {
    id: 2,
    name: "BMW",
    tagline: "The Ultimate Driving Machine",
    image: "/car2.png",
  },
  {
    id: 3,
    name: "Land Cruiser",
    tagline: "Vorsprung durch Technik",
    image: "/car1.png",
  },
   
  {
    id: 6,
    name: "Hummer",
    tagline: "Experience Amazing",
    image: "/car44.png",
  },
]

export default function TopBrandsSection() {
  const { t } = useI18n()
  const [activeIndex, setActiveIndex] = useState(2)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Touch and mouse event handlers for smooth scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0))
    setScrollLeft(containerRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - (containerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0))
    setScrollLeft(containerRef.current?.scrollLeft || 0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()
    const x = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Auto-center active item
  useEffect(() => {
    if (containerRef.current && activeIndex !== null && !isDragging) {
      const container = containerRef.current
      const itemsContainer = container.firstChild as HTMLElement
      const activeItem = itemsContainer?.children[activeIndex] as HTMLElement
      
      if (activeItem) {
        const containerWidth = container.offsetWidth
        const activeItemWidth = activeItem.offsetWidth
        const activeItemOffset = activeItem.offsetLeft
        let scrollTo = activeItemOffset - (containerWidth / 2) + (activeItemWidth / 2)
        
        // Boundary checks
        scrollTo = Math.max(0, Math.min(scrollTo, container.scrollWidth - containerWidth))
        
        container.scrollTo({
          left: scrollTo,
          behavior: 'smooth'
        })
      }
    }
  }, [activeIndex, isDragging])

  return (
    <>
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .car-item {
          scroll-snap-align: center;
        }
      `}</style>

      <section className="py-12 sm:py-16 md:py-24  bg-darkBackground text-lightText overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 mb-8 sm:mb-12 text-center">
          <div className="text-xs sm:text-sm font-light uppercase text-subtleGray mb-2">{t('cars.heading.kicker')}</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
            {t('cars.heading.title')}
          </h2>
        </div>

        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <div 
            ref={containerRef}
            className="absolute inset-0 w-full overflow-x-scroll hide-scrollbar"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex h-full items-center pl-[calc(50%-140px)] pr-[calc(50%-140px)] sm:pl-[calc(50%-175px)] sm:pr-[calc(50%-175px)]">
              {carBrands.map((brand, index) => (
                <div
                  key={brand.id}
                  className={`relative h-full flex-shrink-0 overflow-hidden cursor-pointer transition-all duration-500 ease-in-out car-item
                    ${index === activeIndex ? 
                      'w-[280px] sm:w-[350px] md:w-[400px] lg:w-[500px] mx-1 sm:mx-2 z-20' : 
                      'w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] mx-1 sm:mx-2 z-10'
                    }
                    ${index < activeIndex ? 'opacity-70' : ''}
                    ${index > activeIndex ? 'opacity-70' : ''}
                  `}
                  onClick={() => {
                    if (!isDragging) {
                      setActiveIndex(index)
                    }
                  }}
                >
                  <Image
                    src={brand.image || "/placeholder.svg"}
                    alt={brand.name}
                    fill
                    className={`object-cover object-center transition-all duration-500 ease-in-out
                      ${index === activeIndex ? 'scale-100 brightness-100' : 'scale-110 brightness-75'}
                    `}
                    priority={index === activeIndex}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute top-3 sm:top-6 left-3 sm:left-6 text-lightText">
                    <div className="text-[10px] sm:text-xs font-light uppercase text-subtleGray mb-1">
                      {String(brand.id).padStart(2, '0')}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-light tracking-tight">
                      {brand.name}
                    </h3>
                  </div>

                  <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 flex items-end justify-between">
                    <p className="hidden sm:block text-xs sm:text-sm text-subtleGray rotate-90 origin-bottom-left translate-x-[-50%] translate-y-[-50%] whitespace-nowrap">
                      {brand.tagline}
                    </p>
                    {index === activeIndex && (
                      <Link
                        href="#"
                        className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-luxuryGreen text-darkBackground transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                      >
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}