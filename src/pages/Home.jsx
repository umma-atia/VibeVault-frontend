import { BlogPostsSection } from '../components/Home/Blog/blog-posts-section';
import HeroCarousel from '../components/Home/Carousel/HeroCarousel';
import Category from '../components/Home/Categories/Category';
import TestimonialCarousel from '../components/Home/Compliments';
import DiscountSection from '../components/Home/Discount/DiscountSection';
import Features from '../components/Home/Features';
import ProductArrivals from '../components/Home/product-arrivals';
import Product from '../components/Products/Product';

const Home = () => {
    return (
        <div>
            <HeroCarousel />
            <Features />
            <Category />
            <Product />
            <DiscountSection />
            <ProductArrivals />
            <TestimonialCarousel />
            <BlogPostsSection />
        </div>
    );
};

export default Home;