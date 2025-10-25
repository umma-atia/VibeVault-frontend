import aboutUsImage from '../../assets/images/three-people.jpg';
import teamMem from '../../assets/images/team mem.jpg'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="px-4 py-12 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left Side - Image */}
            <div className="flex justify-center md:justify-center">
              <img
                src={aboutUsImage}
                className="w-full max-w-md h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-4">
                  How Was Our Store Started?
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    VibeVault was born out of a passion for fashion and a desire to create a one-stop destination where style meets convenience. It all began with a simple idea: to offer high-quality, trendy clothing for men, women, and kids under one roof, making fashion accessible and enjoyable for families and individuals alike.

                    Our founder noticed a gap in the market for a store that truly understands the diverse needs of modern shoppers—something that combines the latest trends with comfort and affordability. With this vision in mind, VibeVault was launched, bringing together a curated selection of apparel that reflects the unique vibes of every age group.
                </p>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed">
                From humble beginnings, our store has grown into a vibrant community of fashion enthusiasts who appreciate quality, style, and great value. Every piece in our collection is carefully chosen to ensure you look and feel your best, no matter where life takes you.

                At VibeVault, we’re more than just a clothing store—we're a lifestyle destination that celebrates individuality and self-expression. Thank you for being a part of our journey!
              </p>

              <button className="w-full md:w-auto bg-secondary text-white px-8 py-3 font-semibold text-lg hover:opacity-90 transition-opacity rounded-md">
                SHOP OUR STORE →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {/* Benefit 1 - Free Shipping */}
            <div className="flex flex-col items-start md:items-center text-left md:text-center space-y-3">
              <div className="text-4xl">🚚</div>
              <div>
                <h3 className="font-bold text-foreground">Free shipping</h3>
                <p className="text-sm text-muted-foreground">Over $200</p>
              </div>
            </div>

            {/* Benefit 2 - Money Back */}
            <div className="flex flex-col items-start md:items-center text-left md:text-center space-y-3">
              <div className="text-4xl">↩️</div>
              <div>
                <h3 className="font-bold text-foreground">Money back</h3>
                <p className="text-sm text-muted-foreground">Return within 7 days</p>
              </div>
            </div>

            {/* Benefit 3 - Buy 4 Get 5th */}
            <div className="flex flex-col items-start md:items-center text-left md:text-center space-y-3">
              <div className="text-4xl">🎁</div>
              <div>
                <h3 className="font-bold text-foreground">Buy 4 get 5th</h3>
                <p className="text-sm text-muted-foreground">50% off</p>
              </div>
            </div>

            {/* Benefit 4 - Expert Support */}
            <div className="flex flex-col items-start md:items-center text-left md:text-center space-y-3">
              <div className="text-4xl">❓</div>
              <div>
                <h3 className="font-bold text-foreground">Any questions?</h3>
                <p className="text-sm text-muted-foreground">experts are ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-16 md:py-24 bg-gray-100 mt-1">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Card 1 */}
            <div className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in delivering the highest quality products that stand the test of time and exceed customer
                expectations.
              </p>
            </div>

            {/* Value Card 2 */}
            <div className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Constantly pushing boundaries and exploring new ideas to bring fresh perspectives to our industry.
              </p>
            </div>

            {/* Value Card 3 */}
            <div className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building meaningful connections with our customers and creating a supportive community around our brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center">
                <img
                  src={teamMem}
                  alt={`Team member ${member}`}
                  className="w-full h-64 object-cover rounded-lg mb-4 shadow-md"
                />
                <h3 className="text-xl font-bold mb-1">Team Member {member}</h3>
                <p className="text-muted-foreground">Role & Expertise</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-10 md:py-16 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Join Our Community</h2>
          <p className="text-lg mb-8 opacity-90">
            Be part of something special. Discover our latest collections and exclusive offers.
          </p>
          <button className="bg-primary-foreground text-primary px-8 py-3 font-semibold text-lg hover:opacity-90 transition-opacity rounded-md">
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  )
}
