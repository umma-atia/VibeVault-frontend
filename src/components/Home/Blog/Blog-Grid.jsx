import { BlogCard } from "./blog-card"
import fashionPastel from "../../../assets/images/fashion-pastel-style-two-women.jpg"
import trendSummer from "../../../assets/images/fashion-trend-summer-man.jpg"
import uniqueMoment from "../../../assets/images/fashion-unique-moment-woman-cathedral.jpg"

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      image: fashionPastel,
      category: "FASHION",
      date: "JUL 11, 2022",
      title: "HOW TO LOOK OUTSTANDING IN PASTEL",
      description: "Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida orci,fringilla...",
    },
    {
      id: 2,
      image: trendSummer,
      category: "FASHION",
      date: "JUL 11, 2022",
      title: "TOP 10 FASHION TREND FOR SUMMER",
      description: "Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...",
    },
    {
      id: 3,
      image: uniqueMoment,
      category: "FASHION",
      date: "JUL 11, 2022",
      title: "CRAZY FASHION WITH UNIQUE MOMENT",
      description: "Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...",
    },
    {
      id: 4,
      image: fashionPastel,
      category: "FASHION",
      date: "JUL 11, 2025",
      title: "HOW TO LOOK OUTSTANDING IN PASTEL",
      description: "Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida orci,fringilla...",
    },
    {
      id: 5,
      image: trendSummer,
      category: "FASHION",
      date: "JUL 11, 2024",
      title: "TOP 10 FASHION TREND FOR SUMMER",
      description: "Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...",
    },
    {
      id: 6,
      image: uniqueMoment,
      category: "FASHION",
      date: "JUL 11, 2023",
      title: "CRAZY FASHION WITH UNIQUE MOMENT",
      description: "Turpis purus, gravida orci, fringilla dignissim lacus, turpis ut suspendisse vel tellus...",
    },
  ]

  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              category={post.category}
              date={post.date}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
