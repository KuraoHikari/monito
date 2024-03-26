import { PetCard } from "../card/PetCard";
import { dummyProductData } from "./product-section";

export const ProductSellingSection = () => {
 return (
  <section className="py-[28px] sm:px-[130px] px-[80px] grid lg:grid-cols-4 sm:grid-cols-2  gap-4">
   {dummyProductData.map((pet) => (
    <PetCard key={pet.id} product={pet} />
   ))}
  </section>
 );
};
