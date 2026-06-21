import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'

async function getGalleryImages() {
  return await client.fetch(`
    *[_type == "galleryImage"] | order(_createdAt desc) {
      _id, image, caption, location, category
    }
  `)
}

export default async function GalleryPage() {
  const images = await getGalleryImages()

  return (
    <main className="min-h-screen bg-[#F5F0E8]">

      {/* Header */}
      <div className="bg-[#0A1628] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-medium tracking-widest uppercase mb-2">
            Our Work
          </p>
          <h1 className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
            Installation Gallery
          </h1>
          <p className="text-gray-300 mt-3 text-sm">
            Real installations at homes & offices across Chitral
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {images.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">Gallery coming soon...</p>
            <p className="text-sm mt-2">Add images from Sanity Studio</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((item: any) => (
              <div
                key={item._id}
                className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={urlFor(item.image).width(600).url()}
                    alt={item.caption || 'Gallery Image'}
                    width={600}
                    height={400}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {(item.caption || item.location) && (
                  <div className="p-4">
                    {item.caption && (
                      <p className="text-[#0A1628] font-semibold text-sm">
                        {item.caption}
                      </p>
                    )}
                    {item.location && (
                      <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                        📍 {item.location}
                      </p>
                    )}
                    {item.category && (
                      <span className="inline-block mt-2 text-xs text-[#C9A84C] font-medium uppercase tracking-wide">
                        {item.category}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}