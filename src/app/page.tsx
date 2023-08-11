import FeaturedProducts from '@/components/sections/FeaturedProducts';
import Slider from '@/components/sections/Slider';

export default function Home() {
  return (
    <main>
      <Slider />
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
    </main>
  );
}
