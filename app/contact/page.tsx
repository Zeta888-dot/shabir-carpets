export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">

      {/* Header */}
      <div className="bg-[#0A1628] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-medium tracking-widest uppercase mb-2">
            Get In Touch
          </p>
          <h1 className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
            Contact Us
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A1628] mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
              Visit Our Store
            </h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wide mb-1">Phone</p>
                  <a href="tel:+923456331153" className="text-[#0A1628] font-semibold hover:text-[#C9A84C] transition-colors block">
                    0345-6331153
                  </a>
                  <a href="tel:+923229046458" className="text-[#0A1628] font-semibold hover:text-[#C9A84C] transition-colors block">
                    0322-9046458
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wide mb-1">Email</p>
                  <a href="mailto:northfacepk@gmail.com" className="text-[#0A1628] font-semibold hover:text-[#C9A84C] transition-colors">
                    northfacepk@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-sm">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-wide mb-1">Location</p>
                  <p className="text-[#0A1628] font-semibold">Shahi Bazar Chitral</p>
                  <p className="text-gray-500 text-sm">Khyber Pakhtunkhwa, Pakistan</p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/923456331153"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: '#25D366' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.522 5.855L.057 23.882a.5.5 0 00.61.61l6.037-1.461A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.895 9.895 0 01-5.031-1.371l-.36-.214-3.733.904.936-3.617-.236-.373A9.859 9.859 0 012.106 12C2.106 6.533 6.533 2.106 12 2.106S21.894 6.533 21.894 12 17.467 21.894 12 21.894z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-sm h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.0!2d71.7864!3d35.8513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDUxJzA0LjciTiA3McKwNDcnMTEuMCJF!5e0!3m2!1sen!2spk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}