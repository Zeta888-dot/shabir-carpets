import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-[#0A1628] flex items-center overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #C9A84C 0px,
            #C9A84C 1px,
            transparent 1px,
            transparent 60px
          )`
        }} />
      </div>

      {/* Gold accent left border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9A84C]" />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-20 relative z-10">
        <div className="max-w-3xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-medium tracking-wide">
              Chitral&apos;s Premier Carpet Store
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
            Comfort,{' '}
            <span className="text-[#C9A84C]">Quality</span>{' '}
            & Style
          </h1>

          {/* Subheading */}
          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
            Discover premium carpets, foam, rugs & floor coverings at Shabir Carpets Chitral. 
            Wholesale & retail available at the best prices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="px-8 py-3.5 rounded-full font-semibold text-[#0A1628] bg-[#C9A84C] hover:opacity-90 transition-all duration-200 text-sm tracking-wide"
            >
              View Products
            </Link>
            <a
              href="https://wa.me/923456331153"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold text-white border border-white/30 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200 text-sm tracking-wide"
            >
              Order on WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/10">
            {[
              { number: '500+', label: 'Happy Customers' },
              { number: '4+', label: 'Product Categories' },
              { number: '100%', label: 'Trusted Service' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-[#C9A84C]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {stat.number}
                </p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-[#C9A84C]/20 -mr-48" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[#C9A84C]/10 -mr-32" />
    </section>
  )
}