export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">

      {/* Header */}
      <div className="bg-[#0A1628] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-medium tracking-widest uppercase mb-2">
            Who We Are
          </p>
          <h1 className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
            About Us
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Story */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Chitral&apos;s Trusted Carpet Store
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Shabir Carpets Chitral has been serving the people of Chitral with premium quality 
            carpets, foam, rugs, and floor coverings. Located in the heart of Shahi Bazar, 
            we take pride in offering the finest products at the most reasonable prices.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="text-[#C9A84C] text-sm font-medium tracking-widest uppercase mb-2">
              Our Promise
            </p>
            <h2 className="text-3xl font-bold text-[#0A1628]" style={{ fontFamily: 'var(--font-playfair)' }}>
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '⭐',
                title: 'Quality Products',
                desc: 'We stock only the finest carpets and foam from trusted manufacturers.',
              },
              {
                icon: '💰',
                title: 'Best Prices',
                desc: 'Competitive wholesale & retail prices for every budget.',
              },
              {
                icon: '🤝',
                title: 'Trusted Service',
                desc: 'Hundreds of satisfied customers across Chitral trust us.',
              },
              {
                icon: '🏪',
                title: 'Wide Selection',
                desc: 'Carpets, foam, rugs & floor coverings all under one roof.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-bold text-[#0A1628] mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[#0A1628] rounded-3xl p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { number: '500+', label: 'Happy Customers' },
              { number: '4+', label: 'Product Categories' },
              { number: '100%', label: 'Quality Guaranteed' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-5xl font-bold text-[#C9A84C] mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {stat.number}
                </p>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">Have any questions? We&apos;re here to help!</p>
          <a
            href="https://wa.me/923456331153"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full font-semibold bg-[#C9A84C] text-[#0A1628] hover:opacity-90 transition-all duration-200 text-sm"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </main>
  )
}