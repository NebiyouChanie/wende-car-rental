'use client'

import { Car, CalendarCheck, Sparkles, CircleDot, CircleCheck } from 'lucide-react'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n'
import { useEffect, useRef, useState } from 'react'

export default function RentalProcessSection() {
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

  const steps = [
    {
      id: 1,
      title: t('steps.1.title'),
      description: t('steps.1.desc'),
      icon: <Car className="w-6 h-6 text-luxuryGreen" />
    },
    {
      id: 2,
      title: t('steps.2.title'),
      description: t('steps.2.desc'),
      icon: <CalendarCheck className="w-6 h-6 text-luxuryGreen" />
    },
    {
      id: 3,
      title: t('steps.3.title'),
      description: t('steps.3.desc'),
      icon: <Sparkles className="w-6 h-6 text-luxuryGreen" />
    },
    {
      id: 4,
      title: t('steps.4.title'),
      description: t('steps.4.desc'),
      icon: <CircleDot className="w-6 h-6 text-luxuryGreen" />
    },
    {
      id: 5,
      title: t('steps.5.title'),
      description: t('steps.5.desc'),
      icon: <CircleCheck className="w-6 h-6 text-luxuryGreen" />
    }
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-darker-gray text-lightText overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            {t('steps.title')}
          </h2>
          <p className="text-lg md:text-base text-subtle-gray leading-relaxed max-w-2xl mx-auto">
            {t('steps.subtitle')}
          </p>
        </div>

        {/* Steps + Image */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Steps */}
          <div className="grid gap-12 md:gap-16">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`flex group transform transition-all duration-700 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
              >
                {/* Number + Line */}
                <div className="flex flex-col items-center mr-6">
                  <div className="w-12 h-12 rounded-full border border-luxuryGreen flex items-center justify-center group-hover:bg-luxuryGreen group-hover:text-darkBackground transition-all duration-300">
                    <span className="text-xl font-light transition-all duration-300">{step.id}</span>
                  </div>
                  {step.id !== steps.length && (
                    <div className="flex-1 w-px bg-subtleGray/20 my-2 group-hover:bg-luxuryGreen/50 transition-colors duration-300"></div>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {step.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-light group-hover:text-luxuryGreen transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-subtle-gray text-sm md:text-base pl-10 group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Image */}
          <div className={`relative w-full h-[300px] md:h-[500px] transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'
          } hover:scale-105 transition-transform duration-500`}>
            <Image
              src="/steps.png"
              alt="Rental process illustration"
              fill
              className="object-cover object-center rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/30 opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
        
        {/* Closing Line */}
         
      </div>
    </section>
  )
}