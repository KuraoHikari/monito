import HeroBanner from "@/components/Banner/hero-banner";
import SectionHeader from "@/components/header/section-header";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";

export default function Home() {
 return (
  <div>
   <Navbar />
   <HeroBanner />
   <SectionHeader title="Take A Look At Some Of Our Pets" buttonText="View more" subTitle="what's new?" />
   <HeroBanner />
  </div>
 );
}
