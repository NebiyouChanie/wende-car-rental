'use client'

import { useI18n } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    titleKey: 'services.wedding.title',
    descKey: 'services.wedding.desc',
    image: '/wed2.png',
    alt: 'Wedding Car Service'
  },
  {
    titleKey: 'services.business.title',
    descKey: 'services.business.desc',
    image: '/car22.png',
    alt: 'Business Travel Service'
  },
  {
    titleKey: 'services.tourism.title',
    descKey: 'services.tourism.desc',
    image: '/landcruizer.jpeg',
    alt: 'Tourism Service'
  },
  {
    titleKey: 'services.events.title',
    descKey: 'services.events.desc',
    image: '/car44.png',
    alt: 'Special Events Service'
  }
]

const features = [
  'services.features.decor',
  'services.features.chauffeur',
  'services.features.photo',
  'services.features.insurance',
  'services.features.support',
  'services.features.flexibility'
]

export default function ServicesSection() {
  const { t } = useI18n()

  return (
    <section className="py-16 md:py-24 bg-dark-background text-light-text">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <div className="text-xs md:text-sm font-light uppercase text-subtle-gray mb-2">
            {t('services.heading.kicker')}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4">
            {t('services.heading.title')}
          </h2>
          <p className="text-lg md:text-xl text-subtle-gray max-w-3xl mx-auto">
            {t('services.heading.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-darker-gray border border-subtle-gray/20 rounded-lg p-6 group hover:border-luxury-green/50 transition-all duration-300">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <h3 className="text-xl font-light mb-3 text-center">
                {t(service.titleKey)}
              </h3>
              <p className="text-subtle-gray text-sm leading-relaxed text-center">
                {t(service.descKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-luxury-green rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-light text-light-text">
                  {t(feature)}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cars">
              <Button variant="luxury" size="lg">
                {t('services.cta.primary')}
              </Button>
            </Link>
             
          </div>
        </div>
      </div>
    </section>
  )
}
