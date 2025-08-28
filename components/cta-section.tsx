'use client'

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, ArrowRight, MapPin } from 'lucide-react'
import { format } from "date-fns"
import { useI18n } from "@/lib/i18n"

export default function CTASection() {
  const { t } = useI18n()
  const [pickupDate, setPickupDate] = useState<Date>()
  const [dropoffDate, setDropoffDate] = useState<Date>()
  const [pickupLocation, setPickupLocation] = useState("")
  const [dropoffLocation, setDropoffLocation] = useState("")
  const [propertyType, setPropertyType] = useState("")

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-darkBackground to-darkerGray">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-lg md:text-base text-subtle-gray  leading-relaxed max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
        </div>

        {/* Form */}
        <div className="bg-darkerGray/50 backdrop-blur-sm border border-subtleGray/20  p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Pickup Location */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-light uppercase text-subtleGray tracking-wider">
                {t('cta.pickupLocation.label')}
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-subtleGray" />
                <Input
                  type="text"
                  placeholder={t('cta.pickupLocation.placeholder')}
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="pl-10 rounded-none bg-darkBackground border-subtleGray/30 text-lightText placeholder:text-subtleGray focus:border-luxuryGreen focus-visible:ring-luxuryGreen/20 h-12"
                />
              </div>
            </div>

            {/* Drop-off Location */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-light uppercase text-subtleGray tracking-wider">
                {t('cta.dropoffLocation.label')}
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-subtleGray" />
                <Input
                  type="text"
                  placeholder={t('cta.dropoffLocation.placeholder')}
                  value={dropoffLocation}
                  onChange={(e) => setDropoffLocation(e.target.value)}
                  className="pl-10 rounded-none bg-darkBackground border-subtleGray/30 text-lightText placeholder:text-subtleGray focus:border-luxuryGreen focus-visible:ring-luxuryGreen/20 h-12"
                />
              </div>
            </div>

            {/* Pickup Date */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-light uppercase text-subtleGray tracking-wider">
                {t('cta.pickupDate.label')}
              </label>
              <Popover >
                <PopoverTrigger asChild>
                  <button
                    className="border-1 pl-4 pr-16 py-3 flex items-center text-white/50 justify-start text-left font-normal bg-darkBackground border-subtleGray/30 text-lightText hover:bg-darkBackground hover:border-luxuryGreen hover:text-lightText"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-subtleGray" />
                    {pickupDate ? format(pickupDate, "MMM dd, yyyy") : t('cta.selectDate')}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto rounded-none p-0 bg-white border-subtleGray/30" align="start">
                  <Calendar
                    mode="single"
                    selected={pickupDate}
                    onSelect={setPickupDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="bg-darkBackground text-lightText"
                    classNames={{
                      months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                      month: "space-y-4",
                      caption: "flex justify-center pt-1 relative items-center text-lightText",
                      caption_label: "text-sm font-medium text-lightText",
                      nav: "space-x-1 flex items-center",
                      nav_button: "h-7 w-7 bg-transparent p-0 text-subtleGray hover:text-luxuryGreen",
                      nav_button_previous: "absolute left-1",
                      nav_button_next: "absolute right-1",
                      table: "w-full border-collapse space-y-1",
                      head_row: "flex",
                      head_cell: "text-subtleGray  w-9 font-normal text-[0.8rem]",
                      row: "flex w-full mt-2",
                      cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-luxuryGreen/20 first:[&:has([aria-selected])]: last:[&:has([aria-selected])]: focus-within:relative focus-within:z-20",
                      day: "h-9 w-9 p-0 font-normal text-lightText hover:bg-luxuryGreen/20 hover:text-lightText ",
                      day_selected: "bg-luxuryGreen text-darkBackground hover:bg-luxuryGreen hover:text-darkBackground focus:bg-luxuryGreen focus:text-darkBackground",
                      day_today: "bg-subtleGray/20 text-lightText",
                      day_outside: "text-subtleGray/50",
                      day_disabled: "text-subtleGray/30",
                      day_range_middle: "aria-selected:bg-luxuryGreen/20 aria-selected:text-lightText",
                      day_hidden: "invisible",
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Drop-off Date */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-light uppercase text-subtleGray tracking-wider">
                {t('cta.dropoffDate.label')}
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className="border-1 pl-4 pr-16 py-3 text-white/50 flex items-center justify-start text-left font-normal bg-darkBackground border-subtleGray/30 text-lightText hover:bg-darkBackground hover:border-luxuryGreen hover:text-lightText"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-subtleGray" />
                    {dropoffDate ? format(dropoffDate, "MMM dd, yyyy") : t('cta.selectDate')}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 rounded-none bg-white border-subtleGray/30" align="start">
                  <Calendar
                    mode="single"
                    selected={dropoffDate}
                    onSelect={setDropoffDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="bg-dark-background text-lightText"
                    classNames={{
                      months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                      month: "space-y-4",
                      caption: "flex justify-center pt-1 relative items-center text-lightText",
                      caption_label: "text-sm font-medium text-lightText",
                      nav: "space-x-1 flex items-center",
                      nav_button: "h-7 w-7 bg-transparent p-0 text-subtleGray hover:text-luxuryGreen",
                      nav_button_previous: "absolute left-1",
                      nav_button_next: "absolute right-1",
                      table: "w-full border-collapse space-y-1",
                      head_row: "flex",
                      head_cell: "text-subtleGray  w-9 font-normal text-[0.8rem]",
                      row: "flex w-full mt-2",
                      cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-luxuryGreen/20 first:[&:has([aria-selected])]: last:[&:has([aria-selected])]: focus-within:relative focus-within:z-20",
                      day: "h-9 w-9 p-0 font-normal text-lightText hover:bg-luxuryGreen/20 hover:text-lightText ",
                      day_selected: "bg-luxuryGreen text-darkBackground hover:bg-luxuryGreen hover:text-darkBackground focus:bg-luxuryGreen focus:text-darkBackground",
                      day_today: "bg-subtleGray/20 text-lightText",
                      day_outside: "text-subtleGray/50",
                      day_disabled: "text-subtleGray/30",
                      day_range_middle: "aria-selected:bg-luxuryGreen/20 aria-selected:text-lightText",
                      day_hidden: "invisible",
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Property Type */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm  font-light uppercase text-subtleGray tracking-wider">
                {t('cta.selectCar.label')}
              </label>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="border-1 rounded-none pl-4 pr-12 w-full py-6 flex items-center bg-darkBackground border-subtleGray/30 text-lightText ">
                  <SelectValue placeholder={t('cta.selectCar.placeholder')} />
                </SelectTrigger>
                <SelectContent className="bg-white py-4 rounded-none border-subtleGray/30">
                  <SelectItem value="ultra-luxury" className="text-black hover:bg-gray-200 rounded-none focus:bg-luxuryGreen/20">
                    {t('cta.option.landcruiser')}
                  </SelectItem>
                  <SelectItem value="luxury-villa" className="text-black hover:bg-gray-200 rounded-none focus:bg-luxuryGreen/20">
                    {t('cta.option.mercedesAmg')}
                  </SelectItem>
                  <SelectItem value="penthouse" className="text-black hover:bg-gray-200 rounded-none focus:bg-luxuryGreen/20">
                    {t('cta.option.vwId6')}
                  </SelectItem>
                  <SelectItem value="mansion" className="text-black hover:bg-gray-200 rounded-none focus:bg-luxuryGreen/20">
                     {t('cta.option.gwagen')}
                  </SelectItem>
                  <SelectItem value="apartment" className="text-black hover:bg-gray-200 rounded-none focus:bg-luxuryGreen/20">
                    {t('cta.option.limo')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mt-16">
            <Button variant="luxury" className="border-1  bg-luxuryGreen hover:bg-luxuryGreen/90 text-darkBackground font-light uppercase tracking-wider px-8 py-4 text-base  transition-all duration-300 hover:scale-105 group">
              {t('cta.submit')}
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        {/* <div className="text-center mt-8">
          <p className="text-sm text-subtleGray">
            Our luxury concierge service includes complimentary transportation and refreshments during your viewing
          </p>
        </div> */}
      </div>
    </section>
  )
}
