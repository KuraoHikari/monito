import { PetCard } from '../card/PetCard';
import { dummyProductData } from './product-section';

export const ProductSellingSection = () => {
  return (
    <section className="grid gap-4 px-[80px] py-[28px] sm:grid-cols-2 sm:px-[130px]  lg:grid-cols-4">
      {dummyProductData.map((pet) => (
        <PetCard key={pet.id} item={pet} />
      ))}
    </section>
  );
};
