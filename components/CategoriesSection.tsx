import Link from 'next/link'

const categories = [
  {
    title: 'Carpets',
    description: 'Premium quality carpets for every room',
    icon: '🪄',
    href: '/products?category=carpets',
    bg: 'from-[#0A1628] to-[#1a2d4a]',
  },
  {
    title: 'Foam',
    description: 'Comfortable foam in all sizes & thickness',
    icon: '🛋️',
    href: '/products?category=foam',
    bg: 'from-[#1a2d4a] to-[#0A1628]',
  },
  {
    title: 'Rugs',
    description: 'Beautiful rugs for home & office decor',
    icon: '🎨',
    href: '/products?category=rugs',
    bg: 'from-[#0A1628] to-[#1a2d4a]',
  },
  {
    title: 'Floor Coverings',
    description: 'Durable floor coverings for all surfaces',
    icon: '🏠',
    href: '/products?category=floor-coverings',
    bg: 'from-[#1a2d4a] to-[#0A1628]',
  },
]

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#C9A84C] text-sm font-medium tracking-widest uppercase mb-2">
            What We Offer
          </p>
          <h2 className="text-4xl font-bold text-[#0A1628]" style={{ fontFamily: 'var(--font-playfair)' }}>
            Our Categories
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className={`bg-gradient-to-br ${cat.bg} rounded-2xl p-8 flex flex-col items-center text-center gap-4 hover:scale-105 transition-transform duration-200 group`}
            >
              <span className="text-5xl">{cat.icon}</span>
              <h3 className="text-xl font-bold text-[#C9A84C]" style={{ fontFamily: 'var(--font-playfair)' }}>
                {cat.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {cat.description}
              </p>
              <span className="text-[#C9A84C] text-sm font-medium group-hover:underline mt-2">
                View All →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}