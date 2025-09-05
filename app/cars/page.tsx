'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

const carCategories = [
  {
    name: 'Luxury Sedans',
    cars: [
      { id: 'sclass', name: 'Mercedes S-Class', image: '/car1.png', seats: 5, type: 'Sedan', price: 'Premium' },
      { id: 'bmw7', name: 'BMW 7 Series', image: '/car22.png', seats: 5, type: 'Sedan', price: 'Premium' },
      { id: 'audi', name: 'Audi A8', image: '/car22.png', seats: 5, type: 'Sedan', price: 'Premium' },
      { id: 'lexus', name: 'Lexus LS', image: '/car1.png', seats: 5, type: 'Sedan', price: 'Premium' },
      { id: 'rolls', name: 'Rolls Royce Phantom', image: '/car44.png', seats: 4, type: 'Sedan', price: 'Ultra Premium' },
    ]
  },
  {
    name: 'Luxury SUVs',
    cars: [
      { id: 'prado', name: 'Land Cruiser Prado', image: '/landcruizer.jpeg', seats: 7, type: 'SUV', price: 'Premium' },
      { id: 'gwagen', name: 'Mercedes G-Wagon', image: '/wagen.png', seats: 5, type: 'SUV', price: 'Ultra Premium' },
      { id: 'range', name: 'Range Rover Sport', image: '/car3.png', seats: 5, type: 'SUV', price: 'Premium' },
      { id: 'cayenne', name: 'Porsche Cayenne', image: '/car4.png', seats: 5, type: 'SUV', price: 'Premium' },
      { id: 'x7', name: 'BMW X7', image: '/car22.png', seats: 7, type: 'SUV', price: 'Premium' },
    ]
  },
  {
    name: 'Wedding Cars',
    cars: [
      { id: 'limo', name: 'Stretch Limousine', image: '/car44.png', seats: 8, type: 'Limousine', price: 'Premium' },
      { id: 'bentley', name: 'Bentley Continental', image: '/car1.png', seats: 4, type: 'Coupe', price: 'Ultra Premium' },
      { id: 'maybach', name: 'Mercedes Maybach', image: '/car22.png', seats: 4, type: 'Sedan', price: 'Ultra Premium' },
      { id: 'phantom', name: 'Rolls Royce Phantom', image: '/car44.png', seats: 4, type: 'Sedan', price: 'Ultra Premium' },
    ]
  },
  {
    name: 'Business Travel',
    cars: [
      { id: 'eclass', name: 'Mercedes E-Class', image: '/car22.png', seats: 5, type: 'Sedan', price: 'Standard' },
      { id: 'a6', name: 'Audi A6', image: '/car1.png', seats: 5, type: 'Sedan', price: 'Standard' },
      { id: 'camry', name: 'Toyota Camry', image: '/car3.png', seats: 5, type: 'Sedan', price: 'Standard' },
      { id: 'accord', name: 'Honda Accord', image: '/car4.png', seats: 5, type: 'Sedan', price: 'Standard' },
    ]
  },
  {
    name: 'Tourism & Events',
    cars: [
      { id: 'hiace', name: 'Toyota Hiace', image: '/car3.png', seats: 12, type: 'Van', price: 'Standard' },
      { id: 'coaster', name: 'Toyota Coaster', image: '/car4.png', seats: 20, type: 'Bus', price: 'Standard' },
      { id: 'prado', name: 'Land Cruiser Prado', image: '/landcruizer.jpeg', seats: 7, type: 'SUV', price: 'Premium' },
      { id: 'fortuner', name: 'Toyota Fortuner', image: '/car1.png', seats: 7, type: 'SUV', price: 'Standard' },
    ]
  }
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

        {carCategories.map((category) => (
          <div key={category.name} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-center">{category.name}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {category.cars.map((car) => (
                <div key={car.id} className="group border border-subtleGray/20 bg-darker-gray overflow-hidden rounded-lg hover:border-luxury-green/50 transition-all duration-300">
                  <div className="relative w-full h-56 md:h-64">
                    <Image src={car.image} alt={car.name} fill className="object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                    
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-light mb-1">{car.name}</h3>
                    <p className="text-subtle-gray text-sm mb-2">{car.type} • {car.seats} seats</p>
                    <div className="flex items-center gap-3">
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
          </div>
        ))}
      </section>
    </main>
  )
}


