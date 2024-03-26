import { HeroBanner, SectionBanner } from "@/components/Banner";
import SectionHeader from "@/components/header/section-header";
import Navbar from "@/components/navbar/navbar";
import { ProductPetSection } from "@/components/section/ProductPetSection";
import Image from "next/image";

export default function Home() {
 return (
  <div>
   <Navbar />
   <HeroBanner />
   <SectionHeader title="Take A Look At Some Of Our Pets" buttonText="View more" subTitle="what's new?" />
   <ProductPetSection />
   <SectionBanner />
   {/* <HeroBanner /> */}
  </div>
 );
}
