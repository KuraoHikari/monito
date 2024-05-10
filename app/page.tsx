import { HeroBanner, SectionBannerBrown } from '@/components/Banner';
import { OneMoreFriend, WeNeedHelp } from '@/components/Banner/children';
import SectionHeader from '@/components/header/section-header';
import Navbar from '@/components/navbar/navbar';
import {
  dummyPetData,
  dummyProductData,
} from '@/components/section/product-section';
import ProductPetSection from '@/components/section/ProductPetSection';
import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <SectionHeader
        title="Take A Look At Some Of Our Pets"
        buttonText="View more"
        subTitle="what's new?"
      />
      <ProductPetSection products={dummyPetData} />
      <div className="mx-4 lg:mx-32">
        <SectionBannerBrown reverse={false}>
          <OneMoreFriend />
        </SectionBannerBrown>
      </div>
      <ProductPetSection products={dummyProductData} />
      {/* <HeroBanner /> */}
      <SectionHeader
        title="Pet Sellers"
        buttonText=" View all our sellers"
        subTitle="Proud to be part of"
      />
      <div className="mx-4 lg:mx-32">
        <SectionBannerBrown reverse={true}>
          <WeNeedHelp />
        </SectionBannerBrown>
      </div>
    </div>
  );
}
