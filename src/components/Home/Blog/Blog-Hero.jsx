import bgImg from '../../../assets/images/pexels-jeshoots-com-147458-442574.jpg'

export default function BlogHero() {
  return (
    <section className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mb-4 md:mb-6">
          Blog Page
        </h1>

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm sm:text-base">
          <a href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
            Home
          </a>
          <span className="text-gray-700">/</span>
          <span className="text-orange-600 font-medium">Blog</span>
        </nav>
      </div>
    </section>
  )
}
