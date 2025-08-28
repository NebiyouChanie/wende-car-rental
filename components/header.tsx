'use client'

import { Menu, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useI18n } from "@/lib/i18n"

export default function Header() {
  const { lang, setLang, t } = useI18n()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showHeader, setShowHeader] = useState(true)
  const [hasScrolled, setHasScrolled] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > 10) {
          setHasScrolled(true)
        } else {
          setHasScrolled(false)
        }

        if (window.scrollY > lastScrollY) { // Scrolling down
          setShowHeader(false)
        } else { // Scrolling up
          setShowHeader(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    window.addEventListener('scroll', controlHeader)

    return () => {
      window.removeEventListener('scroll', controlHeader)
    }
  }, [lastScrollY])

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'} ${hasScrolled ? 'bg-dark-background/95 backdrop-blur-sm border-b border-subtleGray/10' : 'bg-transparent'}`}>
        <div className="px-4 lg:px-0 flex items-center justify-between w-full max-w-7xl mx-auto py-4 lg:py-12">
          <div className="flex items-center space-x-2 cursor-pointer">
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
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-light uppercase">
            <Link href="#" className="text-white hover:scale-105 hover:text-luxuryGreen hover:border-b hover:border-subtleGray pb-2 hover:pb-2 transition-all duration-300">
              {t('nav.home')}
            </Link>
            <Link href="/cars" className="text-white hover:scale-105 hover:text-luxuryGreen hover:border-b hover:border-subtleGray pb-2 hover:pb-2 transition-all duration-300">
              {t('nav.fleet')}
            </Link>
            <Link href="#" className="text-white hover:scale-105 hover:text-luxuryGreen hover:border-b hover:border-subtleGray pb-2 hover:pb-2 transition-all duration-300">
              {t('nav.services')}
            </Link>
            <Link href="#" className="text-white hover:scale-105 hover:text-luxuryGreen hover:border-b hover:border-subtleGray pb-2 hover:pb-2 transition-all duration-300">
              {t('nav.about')}
            </Link>
            <Link href="#" className="text-white hover:scale-105 hover:text-luxuryGreen hover:border-b hover:border-subtleGray pb-2 hover:pb-2 transition-all duration-300">
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Desktop Phone */}
          <div className="text-sm text-white font-light hidden md:block">
            {"+(251) 912 345 678"}
          </div>

          {/* Language Switcher + Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-subtleGray text-subtleGray hover:border-luxuryGreen hover:text-luxuryGreen transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-xs uppercase rounded border ${lang === 'en' ? 'border-luxuryGreen text-luxuryGreen' : 'border-subtleGray text-subtleGray'} transition-colors`}
            >EN</button>
            <button
              onClick={() => setLang('am')}
              className={`px-3 py-1 text-xs uppercase rounded border ${lang === 'am' ? 'border-luxuryGreen text-luxuryGreen' : 'border-subtleGray text-subtleGray'} transition-colors`}
            >አማ</button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-dark-background border-l border-subtleGray/20 z-50 transform transition-transform duration-500 ease-in-out lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={closeMobileMenu}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-subtleGray text-subtleGray hover:border-luxuryGreen hover:text-luxuryGreen transition-colors duration-300"
              aria-label="Close mobile menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-6">
            <Link 
              href="#" 
              className="text-white text-lg font-light uppercase hover:text-luxuryGreen transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              {t('nav.home')}
            </Link>
            <Link 
              href="/cars" 
              className="text-white text-lg font-light uppercase hover:text-luxuryGreen transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              {t('nav.fleet')}
            </Link>
            <Link 
              href="#" 
              className="text-white text-lg font-light uppercase hover:text-luxuryGreen transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              {t('nav.services')}
            </Link>
            <Link 
              href="#" 
              className="text-white text-lg font-light uppercase hover:text-luxuryGreen transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              {t('nav.about')}
            </Link>
            <Link 
              href="#" 
              className="text-white text-lg font-light uppercase hover:text-luxuryGreen transition-colors duration-300"
              onClick={closeMobileMenu}
            >
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Mobile Language Switcher */}
          <div className="mt-8 flex items-center gap-2">
            <button onClick={() => setLang('en')} className={`px-3 py-1 text-xs uppercase rounded border ${lang === 'en' ? 'border-luxuryGreen text-luxuryGreen' : 'border-subtleGray text-subtleGray'} transition-colors`}>EN</button>
            <button onClick={() => setLang('am')} className={`px-3 py-1 text-xs uppercase rounded border ${lang === 'am' ? 'border-luxuryGreen text-luxuryGreen' : 'border-subtleGray text-subtleGray'} transition-colors`}>አማ</button>
          </div>

          {/* Mobile Phone Number */}
          <div className="mt-auto pt-6 border-t border-subtleGray/20">
            <p className="text-white text-sm font-light mb-2">{t('header.phoneHelper')}</p>
            <a href="tel:+251912345678" className="text-luxuryGreen text-lg font-light">
              +(251) 912 345 678
            </a>
          </div>
        </div>
      </div>
    </>
  )
}