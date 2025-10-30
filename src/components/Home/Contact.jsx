import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import bgimg from "../../assets/images/phn.jpg"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${bgimg})`
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            <span className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span className="w-8 sm:w-12 md:w-16 h-px bg-foreground"></span>
              <span className="whitespace-nowrap">Get In Touch</span>
              <span className="w-8 sm:w-12 md:w-16 h-px bg-foreground"></span>
            </span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Form Section */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-sm bg-white text-foreground placeholder-muted-foreground text-sm sm:text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-sm bg-white text-foreground placeholder-muted-foreground text-sm sm:text-base"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-sm bg-white text-foreground placeholder-muted-foreground text-sm sm:text-base"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-sm bg-white text-foreground placeholder-muted-foreground text-sm sm:text-base"
              ></textarea>
              <button
                type="submit"
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-sm bg-emerald-400 text-foreground font-medium transition-colors text-sm sm:text-base"
                >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="order-1 lg:order-2">

            {/* Store 1 */}
            <div className="mb-8 md:mb-10">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Store 1</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-muted-foreground">123 Street, New York, USA</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <a href="mailto:info@example.com" className="text-sm sm:text-base text-blue-500 hover:underline">
                    info@vibevault.com
                  </a>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <a href="tel:+012345678900" className="text-sm sm:text-base text-muted-foreground">
                    +012 345 67890
                  </a>
                </div>
              </div>
            </div>

            {/* Store 2 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Store 2</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-muted-foreground">123 Street, New York, USA</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <a href="mailto:info@example.com" className="text-sm sm:text-base text-blue-500 hover:underline">
                    info@vibevault.com
                  </a>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <a href="tel:+012345678900" className="text-sm sm:text-base text-muted-foreground">
                    +012 345 67890
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-6 md:mb-8 mt-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">Thank You!</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We will get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
