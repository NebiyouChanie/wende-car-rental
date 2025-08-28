'use client'

import {
  Clock,
  CarFront,
  BadgeDollarSign,
  Headphones,
  Sparkles,
  CircleDot
} from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { useI18n } from '@/lib/i18n'

function WhyusSection() {
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
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 max-w-7xl mx-auto px-8 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className={`transform transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="text-sm font-light uppercase text-subtle-gray mb-2">
          {t('why.kicker')}
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-16">
          {t('why.title')}
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 gap-y-16">
        {[
          { Icon: Clock, title: t('why.item1.title'), text: t('why.item1.text') },
          { Icon: CarFront, title: t('why.item2.title'), text: t('why.item2.text') },
          { Icon: CircleDot, title: t('why.item3.title'), text: t('why.item3.text') },
          { Icon: BadgeDollarSign, title: t('why.item4.title'), text: t('why.item4.text') },
          { Icon: Headphones, title: t('why.item5.title'), text: t('why.item5.text') },
          { Icon: Sparkles, title: t('why.item6.title'), text: t('why.item6.text') }
        ].map((item, index) => (
          <div 
            key={index}
            className={`flex flex-col items-center text-center transform transition-all duration-700 ease-out delay-${index * 100} ${
              isVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-10 opacity-0 scale-95'
            } hover:-translate-y-2 transition-all duration-300`}
            style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-luxury-green rounded-full opacity-0 group-hover:opacity-10 transform group-hover:scale-125 transition-all duration-300"></div>
              <item.Icon className="w-12 h-12 text-luxury-green mb-4 relative z-10" />
            </div>
            <h3 className="text-xl md:text-2xl font-light mb-4 group-hover:text-luxury-green transition-colors duration-300">{item.title}</h3>
            <p className="text-sm text-subtle-gray leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyusSection