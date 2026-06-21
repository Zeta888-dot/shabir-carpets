import { client } from '@/lib/sanity'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'

async function getProducts(category?: string) {
  const filter = category
    ? `*[_type == "product" && category == "${category}"]`
    : `*[_type == "product"]`
  
  return await client.fetch(`
    ${filter} | order(_createdAt desc) {
      _id, name, slug, category, images,
      originalPrice, salePrice, isOnSale, isNew, inStock
    }
  `)
}

const categories = [
  { label: 'All', value: '' },
  { label: 'Carpets', value: 'carpets' },
  { label: 'Foam', value: 'foam' },
  { label: 'Rugs', value: 'rugs' },
  { label: 'Floor Coverings', value: 'floor-coverings' },
]

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const products = await getProducts(category)

  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      
      {/* Header */}
      <div className="bg-[#0A1628] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-medium tracking-widest uppercase mb-2">
            Browse Our Collection
          </p>
          <h1 className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
            Our Products
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {categories.map((cat) => (
            <Link
              key={cat.value}
              href={cat.value ? `/products?category=${cat.value}` : '/products'}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                (category || '') === cat.value
                  ? 'bg-[#0A1628] text-white'
                  : 'bg-white text-[#0A1628] border border-[#0A1628] hover:bg-[#0A1628] hover:text-white'
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">No products found</p>
            <p className="text-sm mt-2">Try a different category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product: any) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}