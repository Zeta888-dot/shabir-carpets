import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

async function getProduct(slug: string) {
  return await client.fetch(`
    *[_type == "product" && slug.current == "${slug}"][0] {
      _id, name, slug, category, images,
      originalPrice, salePrice, isOnSale, isNew, inStock,
      description, dimensions, material
    }
  `)
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) return notFound()

  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      
      {/* Breadcrumb */}
      <div className="bg-[#0A1628] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 text-sm">
            <Link href="/" className="hover:text-[#C9A84C]">Home</Link>
            {' '}/{' '}
            <Link href="/products" className="hover:text-[#C9A84C]">Products</Link>
            {' '}/{' '}
            <span className="text-[#C9A84C]">{product.name}</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Images */}
          <div className="space-y-4">
            <div className="relative h-96 rounded-2xl overflow-hidden bg-gray-100">
              {product.images?.[0] ? (
                <Image
                  src={urlFor(product.images[0]).width(600).height(500).url()}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300 text-6xl">
                  🪄
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images?.length > 1 && (
              <div className="flex gap-3 overflow-x-auto">
                {product.images.map((img: any, i: number) => (
                  <div key={i} className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      src={urlFor(img).width(100).height(100).url()}
                      alt={`${product.name} ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.isNew && (
                <span className="bg-[#0A1628] text-white text-xs font-semibold px-3 py-1 rounded-full">NEW</span>
              )}
              {product.isOnSale && (
                <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">SALE</span>
              )}
              {!product.inStock && (
                <span className="bg-gray-400 text-white text-xs font-semibold px-3 py-1 rounded-full">OUT OF STOCK</span>
              )}
            </div>

            <p className="text-[#C9A84C] text-sm font-medium uppercase tracking-wide mb-2 capitalize">
              {product.category}
            </p>

            <h1 className="text-4xl font-bold text-[#0A1628] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-[#0A1628]">
                PKR {product.salePrice?.toLocaleString()}
              </span>
              {product.isOnSale && product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">
                  PKR {product.originalPrice?.toLocaleString()}
                </span>
              )}
              {product.isOnSale && product.originalPrice && (
                <span className="bg-red-100 text-red-600 text-sm font-semibold px-2 py-1 rounded-lg">
                  {Math.round((1 - product.salePrice / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>
            )}

            {/* Specs */}
            <div className="bg-white rounded-2xl p-6 mb-8 space-y-3">
              {product.dimensions && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Dimensions</span>
                  <span className="text-[#0A1628] font-semibold">{product.dimensions}</span>
                </div>
              )}
              {product.material && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Material</span>
                  <span className="text-[#0A1628] font-semibold">{product.material}</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 font-medium">Availability</span>
                <span className={`font-semibold ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/923456331153?text=${encodeURIComponent(`Hi! I'm interested in this product:\n\n*${product.name}*\nPrice: PKR ${product.salePrice?.toLocaleString()}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-4 rounded-full font-semibold bg-[#C9A84C] text-[#0A1628] hover:opacity-90 transition-all duration-200"
              >
                Order on WhatsApp
              </a>
              <a
                href="tel:+923456331153"
                className="flex-1 text-center py-4 rounded-full font-semibold border-2 border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628] hover:text-white transition-all duration-200"
              >
                Call to Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}