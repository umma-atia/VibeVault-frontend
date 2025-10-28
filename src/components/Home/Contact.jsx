import { Phone, MapPin, Facebook, Twitter, Youtube, Linkedin } from "lucide-react"

export default function ContactSection() {
  const contactData = {
    phones: ["+1650-243-00023", "+1650-243-00021"],
    emails: ["info@vibevault.com", "info@company.com"],
    address: "Dhanmandi 7/A, Dhaka",
    socials: [
      { icon: Facebook, label: "Facebook", href: "#" },
      { icon: Twitter, label: "Twitter", href: "#" },
      { icon: Youtube, label: "YouTube", href: "#" },
      { icon: Linkedin, label: "LinkedIn", href: "#" },
    ],
  }

  return (
    <section className="w-full bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Right Section - Get In Touch */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 md:mb-12">Get In Touch</h2>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Phones */}
              <div className="border-b md:border-b md:border-r md:pb-8 md:pr-8 pb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Phones</h3>
                <div className="space-y-3">
                  {contactData.phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                      <Phone size={18} className="text-muted-foreground flex-shrink-0" />
                      <span>{phone}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Emails */}
              <div className="border-b md:border-b md:pb-8 pb-8">
                <h3 className="font-bold text-foreground mb-4">Emails</h3>
                <div className="space-y-3">
                  {contactData.emails.map((email, index) => (
                    <a
                      key={index}
                      href={`mailto:${email}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="border-b md:border-b-0 md:border-r md:pb-0 md:pr-8 pb-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Address</h3>
                <div className="flex items-start gap-2">
                  <MapPin size={18} className="text-muted-foreground flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{contactData.address}</p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Social Links</h3>
                <div className="flex gap-4">
                  {contactData.socials.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="text-foreground hover:text-blue-600 transition-colors"
                        >
                        <Icon size={20} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* Left Section - Thank You */}
          <div className="flex flex-col place-content-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Thank You!</h1>
            <p className="text-lg text-muted-foreground">We will get back to you as soon as possible.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
