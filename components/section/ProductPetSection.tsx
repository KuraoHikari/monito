import { PetProductType } from '@/types/pet-type';

import { PetCard } from '../card/PetCard';

type ProductPetSectionProps = {
  products: PetProductType[];
};

const ProductPetSection: React.FC<ProductPetSectionProps> = ({ products }) => {
  return (
    <section className="grid gap-4 px-[80px] py-[28px] sm:grid-cols-2 sm:px-[130px]  lg:grid-cols-4">
      {products.map((pet) => (
        <PetCard key={pet.id} item={pet} />
      ))}
    </section>
  );
};

export default ProductPetSection;
