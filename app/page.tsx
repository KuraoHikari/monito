import HeroBanner from "@/components/Banner/hero-banner";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <HeroBanner />
    </div>
  );
}
