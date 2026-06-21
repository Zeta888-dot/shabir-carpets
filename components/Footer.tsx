import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white mt-20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-[#C9A84C] mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
              Shabir Carpets
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Comfort, Quality & Trust Under One Roof
            </p>
            <p className="text-xs text-gray-400">
              Quality • Comfort • Style
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#C9A84C] font-semibold mb-4 tracking-wide uppercase text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Products', href: '/products' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 text-sm hover:text-[#C9A84C] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#C9A84C] font-semibold mb-4 tracking-wide uppercase text-sm">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <div>
                  <a href="tel:+923456331153" className="hover:text-[#C9A84C] transition-colors">0345-6331153</a>
                  <br />
                  <a href="tel:+923229046458" className="hover:text-[#C9A84C] transition-colors">0322-9046458</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <a href="mailto:northfacepk@gmail.com" className="hover:text-[#C9A84C] transition-colors">
                  northfacepk@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Shahi Bazar Chitral, Khyber Pakhtunkhwa, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-400">
            © 2024 Shabir Carpets Chitral. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Wholesale & Retail Available
          </p>
        </div>
      </div>
    </footer>
  )
}