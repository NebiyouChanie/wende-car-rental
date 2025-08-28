'use client'

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useI18n } from "@/lib/i18n"

function TestimonialSection() {
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
      className="py-16 md:py-24 l max-w-7xl mx-auto px-8 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className={`transform transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="text-sm font-light uppercase text-subtle-gray mb-2">{t('testimonials.kicker')}</div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-12">{t('testimonials.title')}</h2>
      </div>
      
      <div className="space-y-16 grid md:grid-cols-2 gap-32">
        {/* Testimonial 1 */}
        <div className={`flex gap-8 item-start transform transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
          <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden">
            <Image
              src="/mrwonde.png"
              alt="Client Avatar"
              fill
              className="object-cover object-center rounded-full md:rounded-none transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-base font-light md:text-lg italic text-subtle-gray leading-relaxed mb-4 transition-all duration-500 hover:text-gray-700">
              {t('testimonials.1.quote')}
            </p>
            <h3 className="text-xl font-light transition-all duration-500 hover:text-luxury-green">Dawit M.</h3>
            <p className="text-sm text-subtle-gray transition-all duration-500 hover:text-luxury-green">{t('testimonials.1.role')}</p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className={`flex gap-8 item-start transform transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}>
          <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden">
            <Image
              src="/mrwonde.png"
              alt="Client Avatar"
              fill
              className="object-cover object-center rounded-full md:rounded-none transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-base font-light md:text-lg italic text-subtle-gray leading-relaxed mb-4 transition-all duration-500 hover:text-gray-700">
              {t('testimonials.2.quote')}
            </p>
            <h3 className="text-xl font-light transition-all duration-500 hover:text-luxury-green">Mahi A.</h3>
            <p className="text-sm text-subtle-gray transition-all duration-500 hover:text-luxury-green">{t('testimonials.2.role')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection