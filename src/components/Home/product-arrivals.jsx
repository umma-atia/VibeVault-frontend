import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProductCard from "./product-card"
import baggyShirtImage from "../../assets/images/baggy-shirt-fashion.jpg"
import cottonOffWhiteImage from "../../assets/images/cotton-off-white-shirt.jpg"
import cropSweatImage from "../../assets/images/crop-sweater-fashion.jpg"
import vintageDenimImage from "../../assets/images/vintage-denim-jeans.jpg"
import linenBlazerImage from "../../assets/images/linen-blazer.jpg"

const products = [
  {
    id: 1,
    name: "Crop Sweater",
    price: 50.0,
    image: cropSweatImage,
  },
  {
    id: 2,
    name: "Baggy Shirt",
    price: 55.0,
    image: baggyShirtImage,
  },
  {
    id: 3,
    name: "Cotton Off-White Shirt",
    price: 65.0,
    image: cottonOffWhiteImage,
  },
  
  {
    id: 4,
    name: "Vintage Denim",
    price: 75.0,
    image: vintageDenimImage,
  },
  {
    id: 5,
    name: "Linen Blazer",
    price: 120.0,
    image: linenBlazerImage,
  },
]

export default function ProductArrivals() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, products.length - itemsPerView) : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= products.length - itemsPerView ? 0 : prev + 1))
  }

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <section className="w-full px-6 py-16 md:px-8 lg:px-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">OUR NEW ARRIVALS</h1>
        <a
          href="#"
          className="btn btn-secondary px-6 py-6 rounded-full text-lg"
        >
          VIEW ALL PRODUCTS
        </a>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 p-2 hover:bg-muted rounded-full transition-colors hidden lg:flex items-center justify-center"
          aria-label="Previous products"
        >
          <ChevronLeft className="w-6 h-6 text-muted-foreground" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 p-2 hover:bg-muted rounded-full transition-colors hidden lg:flex items-center justify-center"
          aria-label="Next products"
        >
          <ChevronRight className="w-6 h-6 text-muted-foreground" />
        </button>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex justify-center gap-4 mt-8 lg:hidden">
        <button
          onClick={handlePrev}
          className="p-2 hover:bg-muted rounded-full transition-colors"
          aria-label="Previous products"
        >
          <ChevronLeft className="w-5 h-5 text-muted-foreground" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 hover:bg-muted rounded-full transition-colors"
          aria-label="Next products"
        >
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </section>
  )
}

