import { Link, Mail, MapPin, Phone } from "lucide-react"

function Location() {
  return (
    <section className="py-16 md:py-24 lg:py-32 max-w-7xl mx-auto px-8 md:px-12 lg:px-16 grid md:grid-cols-2 gap-12 md:gap-24 items-center">
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.755234743767!2d38.75786041528802!3d9.022609893547394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className=""
        ></iframe>
      </div>
      <div className="flex flex-col">
        <div className="text-sm font-light uppercase text-subtle-gray mb-2">Our Location</div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-12">Find Us</h2>
        <p className="text-base md:text-lg text-subtle-gray leading-relaxed max-w-lg mb-8">
          Visit our office in Addis Ababa to discuss your luxury property needs in person.
        </p>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="mt-1">
              <MapPin className="w-5 h-5 text-luxury-green" />
            </div>
            <div>
              <h3 className="text-lg font-light">Address</h3>
              <p className="text-subtle-gray">Bole Road, Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="mt-1">
              <Phone className="w-5 h-5 text-luxury-green" />
            </div>
            <div>
              <h3 className="text-lg font-light">Phone</h3>
              <p className="text-subtle-gray">+(251) 912 345 678</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="mt-1">
              <Mail className="w-5 h-5 text-luxury-green" />
            </div>
            <div>
              <h3 className="text-lg font-light">Email</h3>
              <p className="text-subtle-gray">info@luxuryproperties.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location