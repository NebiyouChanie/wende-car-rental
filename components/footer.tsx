'use client'

import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter, Facebook } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="py-16 md:py-24 lg:py-32 bg-darker-gray text-subtle-gray">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Logo and Name */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
                      <Image 
                        src="/whitelogo.svg" 
                        alt="Company Logo"
                        width={60}
                        height={60}
                      />
                      <div className='flex flex-col '>
                        <h3 className="text-[24px] font-light text-light-text -mb-2 uppercase">Wende</h3>
                        <h3 className="text-[11px] font-light text-light-text ">Luxury Car Rental</h3>
                      </div>
                    </div>
          <p className="text-sm leading-relaxed">
            {t('footer.tagline')}
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-light text-light-text uppercase mb-2">{t('footer.quickLinks')}</h3>
          <Link href="#" className="text-sm hover:text-light-text transition-colors">
            {t('footer.home')}
          </Link>
          <Link href="#" className="text-sm hover:text-light-text transition-colors">
            {t('footer.fleet')}
          </Link>
          <Link href="#" className="text-sm hover:text-light-text transition-colors">
            {t('footer.services')}
          </Link>
          <Link href="#" className="text-sm hover:text-light-text transition-colors">
            {t('footer.about')}
          </Link>
          <Link href="#" className="text-sm hover:text-light-text transition-colors">
            {t('footer.contact')}
          </Link>
        </div>

        {/* Location Information */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-light text-light-text uppercase mb-2">{t('footer.location')}</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-luxury-green mt-0.5" />
              <p className="text-sm">Bole Road, Addis Ababa, Ethiopia</p>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-luxury-green mt-0.5" />
              <p className="text-sm">+(251) 912 345 678</p>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-luxury-green mt-0.5" />
              <p className="text-sm">info@wendecarrental.com</p>
            </div>
          </div>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-light text-light-text uppercase mb-2">{t('footer.follow')}</h3>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-subtle-gray hover:text-light-text transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-subtle-gray hover:text-light-text transition-colors" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-subtle-gray hover:text-light-text transition-colors" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-subtle-gray hover:text-light-text transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {/* Embedded Map Section */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 mt-16">
        <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden border border-subtle-gray/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.755234743767!2d38.75786041528802!3d9.022609893547394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 mt-16 pt-8 border-t border-subtle-gray/20 text-center text-sm">
        © {new Date().getFullYear()} Wende Car Rental. {t('footer.copyright')}
      </div>
    </footer>
  )
}