'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, Crown, Car, Sparkles } from 'lucide-react'
import { Button } from './ui/button'
import { useI18n } from '@/lib/i18n'

export default function WeddingSection() {
  const { t } = useI18n()
  const weddingCars = [
    {
      id: 1,
      name: 'Mercedes S-Class',
      description: t('wedding.cars.1.desc'),
      image: '/car1.png',
    },
    {
      id: 2,
      name: 'BMW 7 Series',
      description: t('wedding.cars.2.desc'),
      image: '/car22.png',
    },
    {
      id: 3,
      name: 'Land Cruiser Prado',
      description: t('wedding.cars.3.desc'),
      image: '/landcruizer.jpeg',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-darkBackground text-lightText">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 text-subtleGray text-xs uppercase tracking-widest mb-2">
            <Heart className="w-4 h-4" />
            {t('wedding.kicker')}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
            {t('wedding.title')}
          </h2>
          <p className="text-subtleGray max-w-2xl mx-auto mt-4 md:text-base">
            {t('wedding.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {weddingCars.map((car) => (
            <div key={car.id} className="group relative overflow-hidden rounded-md border border-subtleGray/20 bg-darker-gray">
              <div className="relative w-full h-56 md:h-64">
                <Image src={car.image} alt={car.name} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-light mb-1">{car.name}</h3>
                <p className="text-subtleGray text-sm">{car.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="flex items-start gap-3">
            <Crown className="w-5 h-5 text-luxuryGreen mt-1" />
            <div>
              <h4 className="text-lg font-light">{t('wedding.bullet1.title')}</h4>
              <p className="text-subtleGray text-sm">{t('wedding.bullet1.desc')}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Car className="w-5 h-5 text-luxuryGreen mt-1" />
            <div>
              <h4 className="text-lg font-light">{t('wedding.bullet2.title')}</h4>
              <p className="text-subtleGray text-sm">{t('wedding.bullet2.desc')}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-luxuryGreen mt-1" />
            <div>
              <h4 className="text-lg font-light">{t('wedding.bullet3.title')}</h4>
              <p className="text-subtleGray text-sm">{t('wedding.bullet3.desc')}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Link href="#contact">
            <Button variant="luxury-white">{t('wedding.ctaPrimary')}</Button>
          </Link>
           
        </div>
      </div>
    </section>
  )
}


