import Link from 'next/link'
import { client } from '@/lib/sanity'
import ProductCard from '@/components/ProductCard'

async function getFeaturedProducts() {
  return await client.fetch(`
    *[_type == "product"] | order(_createdAt desc) [0...6] {
      _id, name, slug, category, images, 
      originalPrice, salePrice, isOnSale, isNew, inStock
    }
  `)
}

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#C9A84C] text-sm font-medium tracking-widest uppercase mb-2">
            Our Collection
          </p>
          <h2 className="text-4xl font-bold text-[#0A1628]" style={{ fontFamily: 'var(--font-playfair)' }}>
            Featured Products
          </h2>
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">Products coming soon...</p>
            <p className="text-sm mt-2">Add products from Sanity Studio</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product: any) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="px-8 py-3.5 rounded-full font-semibold border-2 border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628] hover:text-white transition-all duration-200 text-sm tracking-wide"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}