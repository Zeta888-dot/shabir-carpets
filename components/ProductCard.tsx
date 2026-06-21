import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
      
      {/* Image */}
      <div className="relative h-56 bg-gray-100 overflow-hidden">
        {product.images?.[0] ? (
          <Image
            src={urlFor(product.images[0]).width(400).height(300).url()}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 text-5xl">
            🪄
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.isNew && (
            <span className="bg-[#0A1628] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              NEW
            </span>
          )}
          {product.isOnSale && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              SALE
            </span>
          )}
          {!product.inStock && (
            <span className="bg-gray-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              OUT OF STOCK
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-[#C9A84C] font-medium uppercase tracking-wide mb-1 capitalize">
          {product.category}
        </p>
        <h3 className="text-lg font-bold text-[#0A1628] mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xl font-bold text-[#0A1628]">
            PKR {product.salePrice?.toLocaleString()}
          </span>
          {product.isOnSale && product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              PKR {product.originalPrice?.toLocaleString()}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Link
            href={`/products/${product.slug?.current}`}
            className="flex-1 text-center py-2.5 rounded-full text-sm font-semibold border-2 border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628] hover:text-white transition-all duration-200"
          >
            View Details
          </Link>
          <a
            href={`https://wa.me/923456331153?text=I'm interested in ${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2.5 rounded-full text-sm font-semibold bg-[#C9A84C] text-[#0A1628] hover:opacity-90 transition-all duration-200"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  )
}