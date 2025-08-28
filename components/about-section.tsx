'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useI18n } from '@/lib/i18n'

function AboutSection() {
  const { t } = useI18n()
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 max-w-7xl mx-auto px-8 md:px-12 lg:px-16 grid md:grid-cols-2 gap-12 md:gap-24 items-center overflow-hidden"
    >
      {/* Text Content */}
      <div className="flex flex-col">
        <div className={`transform transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-sm font-light uppercase text-subtle-gray mb-2">
            {t('about.kicker')}
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
            {t('about.title')}
          </h2>
        </div>
        
        <div className={`space-y-6 transform transition-all duration-700 ease-out delay-100 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>             
          <p className='text-base font-light md:text-lg text-subtle-gray leading-relaxed max-w-lg'>
            {t('about.p1')}
          </p>

          <p className='text-base font-light md:text-lg text-subtle-gray leading-relaxed max-w-lg'>
            {t('about.p2')}
          </p>

          <p className='text-base font-light md:text-lg text-subtle-gray leading-relaxed max-w-lg'>
            {t('about.p3')}
          </p>
        </div>

        <div className={`flex items-center space-x-4 mt-8 transform transition-all duration-700 ease-out delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } hover:translate-x-2 transition-transform duration-300`}>
          <Link href="#" className="text-sm font-light uppercase hover:text-subtle-gray transition-colors">
            {t('about.learnMore')}
          </Link>
          <div className="circular-button">
            <ArrowRight className="arrow-icon w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>

      {/* Image with enhanced animations */}
      <div className={`relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-2xl transform transition-all duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
      } hover:scale-105 transition-transform duration-500`}>
        <Image
          src="/mrwonde.png"
          alt={t('about.imageAlt')}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40 opacity-0 hover:opacity-100 transition-opacity duration-500" />
      </div>
    </section>
  )
}

export default AboutSection