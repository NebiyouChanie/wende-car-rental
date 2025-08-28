'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

const cars = [
  { id: 'sclass', name: 'Mercedes S-Class', image: '/car1.png', seats: 5, type: 'Sedan' },
  { id: 'bmw7', name: 'BMW 7 Series', image: '/car22.png', seats: 5, type: 'Sedan' },
  { id: 'prado', name: 'Land Cruiser Prado', image: '/landcruizer.jpeg', seats: 7, type: 'SUV' },
  { id: 'gwagen', name: 'Mercedes G-Wagon', image: '/wagen.png', seats: 5, type: 'SUV' },
  { id: 'audi', name: 'Audi', image: '/car22.png', seats: 5, type: 'Sedan' },
]

export default function CarsPage() {
  const { t } = useI18n()

  return (
    <main className="min-h-screen bg-dark-background text-light-text">
      <section className="py-16 md:py-48 max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-10 md:mb-14">
          <div className="text-xs md:text-sm font-light uppercase text-subtle-gray mb-2">{t('cars.heading.kicker')}</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">{t('cars.heading.title')}</h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cars.map((car) => (
            <div key={car.id} className="group border border-subtleGray/20 bg-darker-gray overflow-hidden">
              <div className="relative w-full h-56 md:h-64">
                <Image src={car.image} alt={car.name} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-light mb-1">{car.name}</h3>
                <p className="text-subtle-gray text-sm">{car.type} • {car.seats} seats</p>
                <div className="mt-4 flex items-center gap-3">
                  <Link href="#" className="text-sm uppercase font-light text-luxuryGreen hover:underline">
                    {t('cars.viewDetails')}
                  </Link>
                  <Link href="#" className="text-sm uppercase font-light text-light-text hover:underline">
                    {t('cars.bookNow')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}


