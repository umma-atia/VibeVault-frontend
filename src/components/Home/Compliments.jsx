import { useState, useEffect } from "react"

export default function TestimonialCarousel() {
  const testimonials = [
    {
      id: 1,
      quote: "More than expected crazy soft, flexible and best fitted white simple denim shirt.",
      author: "CASUAL WAY",
    },
    {
      id: 2,
      quote: "Best fitted white denim shirt I've ever owned. More than expected crazy soft, flexible.",
      author: "STYLE GURU",
    },
    {
      id: 3,
      quote: "Flexible and best fitted white simple denim shirt. More than expected crazy soft.",
      author: "FASHION FORWARD",
    },
    {
      id: 4,
      quote: "Soft, flexible and best fitted white simple denim shirt. More than expected crazy.",
      author: "TREND SETTER",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const getPrevIndex = () => (currentIndex - 1 + testimonials.length) % testimonials.length
  const getNextIndex = () => (currentIndex + 1) % testimonials.length

  return (
    <section className="w-full bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold tracking-widest text-gray-900">WE LOVE GOOD COMPLIMENT</h2>
        </div>

        {/* Testimonial Container */}
        <div className="relative h-64 flex items-center justify-center">
          {/* Faded Left Testimonial */}
          <div className="absolute left-0 w-1/4 text-center opacity-20 pointer-events-none">
            <p className="text-lg text-gray-400 leading-relaxed">{testimonials[getPrevIndex()].quote}</p>
            <p className="text-xs text-gray-400 mt-2 tracking-widest">{testimonials[getPrevIndex()].author}</p>
          </div>

          {/* Main Testimonial */}
          <div className="w-1/2 text-center px-8">
            <blockquote className="text-3xl text-gray-600 leading-relaxed mb-4">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <p className="text-sm text-gray-500 tracking-widest font-medium">{testimonials[currentIndex].author}</p>
          </div>

          {/* Faded Right Testimonial */}
          <div className="absolute right-0 w-1/4 text-center opacity-20 pointer-events-none">
            <p className="text-lg text-gray-400 leading-relaxed">{testimonials[getNextIndex()].quote}</p>
            <p className="text-xs text-gray-400 mt-2 tracking-widest">{testimonials[getNextIndex()].author}</p>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-gray-600 w-4" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
