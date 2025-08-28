'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import Header from './header';
import { useI18n } from '@/lib/i18n';
import { Button } from './ui/button';

function HeroSection() {
const { t } = useI18n()

const slides = [
  {
    id: 1,
    titleKey: 'hero.slide1.title',
    cardTitle: "Villa Bole",
    location: "Bole, Addis Ababa",
    descriptionKey:
      'hero.slide1.desc',
    image: "/hero1.png",
  },
  {
    id: 2,
    titleKey: 'hero.slide2.title',
    cardTitle: "Summit Penthouse",
    location: "Summit, Addis Ababa",
    descriptionKey:
      'hero.slide2.desc',
    image: "/hero2.png",
  },
  {
    id: 3,
    titleKey: 'hero.slide3.title',
    cardTitle: "CMC Estate",
    location: "CMC, Addis Ababa",
    descriptionKey:
      'hero.slide3.desc',
    image: "/hero3.png",
  },
  {
    id: 4,
    titleKey: 'hero.slide4.title',
    cardTitle: "Airport Mansion",
    location: "Old Airport, Addis Ababa",
    descriptionKey:
      'hero.slide4.desc',
    image: "/car4.png",
  },
];


  const [currentSlide, setCurrentSlide] = useState(0);
  const [rippleActive, setRippleActive] = useState(false);
  const [rippleOrigin, setRippleOrigin] = useState({ x: 0, y: 0 });
  const [rippleSize, setRippleSize] = useState(0);
  const [textAnimationKey, setTextAnimationKey] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Trigger text animation when slide changes
  useEffect(() => {
    setTextAnimationKey(prev => prev + 1);
  }, [currentSlide]);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const handleCardClick = useCallback((index: number, event: React.MouseEvent) => {
    if (index === currentSlide) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    setRippleOrigin({ x, y });
    setRippleSize(0);
    setRippleActive(true);

    // Animate ripple expansion
    setTimeout(() => {
      setRippleSize(Math.max(window.innerWidth, window.innerHeight));
    }, 50);

    // Change slide after ripple animation
    setTimeout(() => {
      setCurrentSlide(index);
      setRippleActive(false);
    }, 800);
  }, [currentSlide]);

  return (
    <section className="relative w-full h-[100svh] overflow-hidden lg:mb-24">
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
      ))}

      {/* Ripple Effect Overlay */}
      {rippleActive && (
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${rippleOrigin.x}px ${rippleOrigin.y}px, 
              rgba(0,0,0,0) 0%, 
              rgba(0,0,0,0) ${rippleSize}px, 
              rgba(0,0,0,1) ${rippleSize + 50}px)`,
            transition: 'all 800ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      )}

      <div className="relative z-10 flex flex-col h-full p-4 sm:p-8 md:p-12 lg:p-16">
        {/* Navigation */}
         

        {/* Hero Content */}
        <div className="flex-1 flex items-end max-w-7xl mx-auto w-full pb-8 sm:pb-16 md:pb-8 lg:pb-8">
          <div className="grid xl:grid-cols-2 gap-8 lg:gap-12 w-full items-end">
            {/* Left Content with Animations */}
            <div className="flex flex-col" key={textAnimationKey}>
              {/* <div 
                className="text-sm font-light uppercase text-subtleGray mb-2 animate-fadeInUp"
                style={{
                  animation: 'fadeInUp 0.8s ease-out 0.2s forwards',
                  opacity: 0
                }}
              >
                {slides[currentSlide].location}
              </div> */}
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight mb-4 sm:mb-6"
                style={{
                  animation: 'fadeInUp 0.8s ease-out 0.4s forwards',
                  opacity: 0
                }}
              >
                {t(slides[currentSlide].titleKey)}
              </h1>
              <p 
                className="text-base sm:text-base  text-subtleGray leading-relaxed mb-6 sm:mb-8 max-w-lg"
                style={{
                  animation: 'fadeInUp 0.8s ease-out 0.6s forwards',
                  opacity: 0
                }}
              >
                {t(slides[currentSlide].descriptionKey)}
              </p>
              <div 
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4"
                // style={{
                //   animation: 'fadeInUp 0.8s ease-out 0.8s forwards',
                //   opacity: 0
                // }}
              >
                <Link
                  href="#"
                 >
                  <Button variant="luxury-white">
                    {t('hero.ctaPrimary')}
                  </Button>
                </Link>
                <Link
                  href="/cars"
                 >
                  <Button variant="luxury-white">
                    {t('hero.ctaSecondary')}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Property Cards */}
            <div className="hidden xl:flex flex-col items-end mt-24">
               

              {/* Divider line */}
              <div className="w-full border-t border-subtleGray my-4"></div>

              {/* Navigation Controls */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={goToPrevious}
                  className="flex items-center hover:scale-105  justify-center w-12 h-12 rounded-full border border-subtleGray text-subtleGray hover:border-lightText hover:text-lightText transition-all duration-500 ease-in-out"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="flex items-center hover:scale-105  justify-center w-12 h-12 rounded-full border border-subtleGray text-subtleGray hover:border-lightText hover:text-lightText transition-all duration-500 ease-in-out"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="text-2xl font-light text-subtleGray ml-4">
                  {String(currentSlide + 1).padStart(2, '0')}
                </div>
              </div>
            </div>

            {/* Mobile Navigation Controls */}
            <div className="xl:hidden flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={goToPrevious}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-subtleGray text-subtleGray hover:border-lightText hover:text-lightText transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="text-2xl font-light text-subtleGray">
                {String(currentSlide + 1).padStart(2, '0')}
              </div>
              <button
                onClick={goToNext}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-subtleGray text-subtleGray hover:border-lightText hover:text-lightText transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection