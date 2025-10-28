import { BlogSection } from "../components/Home/Blog/Blog-Grid";
import BlogHero from "../components/Home/Blog/Blog-Hero";

const Blog = () => {
  return (
    <main className="min-h-screen">
      <BlogHero />
      <BlogSection />
    </main>
  )
}
export default Blog;