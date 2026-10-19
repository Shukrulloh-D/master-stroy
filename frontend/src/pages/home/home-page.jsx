import { Header } from '@/widgets/header/header';
import { Footer } from '@/widgets/footer/footer';
import { CartModal } from '@/shared/ui/cart-modal/cart-modal';
import { ScrollToTop } from '@/shared/ui/scroll-to-top/scroll-to-top';
import { Hero } from './sections/hero/hero';
import { CatalogPreview } from './sections/catalog-preview/catalog-preview';
import { AboutUs } from './sections/about-us/about-us';
import { TopProducts } from './sections/top-products/top-products';
import { ProductionVideo } from './sections/production-video/production-video';
import { OurWorks } from './sections/our-works/our-works';
import { Advantages } from './sections/advantages/advantages';
import { DeliveryMap } from './sections/delivery-map/delivery-map';

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CatalogPreview />
        <div id="about"><AboutUs /></div>
        <TopProducts />
        <ProductionVideo />
        <div id="portfolio"><OurWorks /></div>
        <div id="useful"><Advantages /></div>
        <DeliveryMap />
      </main>
      <Footer />
      <CartModal />
      <ScrollToTop />
    </>
  );
}
