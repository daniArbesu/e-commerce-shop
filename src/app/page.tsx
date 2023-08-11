import CategoriesSection from '@/components/sections/Categories';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import Slider from '@/components/sections/Slider';

export default function Home() {
  return (
    <main>
      <Slider />
      <FeaturedProducts type="featured" />
      <CategoriesSection />
      <FeaturedProducts type="trending" />
    </main>
  );
}
