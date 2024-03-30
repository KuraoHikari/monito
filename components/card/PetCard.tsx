import Image from 'next/image';
import { PetProductProps } from './pet-card';

export const PetCard = ({ product }: PetProductProps) => {
  const { title, gene, age, price, image } = product;

  return (
    <div
      className="
        w-fit
        rounded-xl 
        border-[0.1px] 
        border-gray-50 
        bg-white  
        p-2
        shadow-lg"
    >
      {/* Image */}

      <Image
        src={image}
        alt={`${title}.png`}
        width={264}
        height={264}
        className="
          overflow-hidden 
          rounded-xl
          object-cover"
      />

      {/* Desc */}
      <div className="py-4">
        {/* title */}
        <div className="">
          <h2
            className="
               text-[16px]
               font-extrabold 
               leading-[24px]
               text-neutral-100"
          >
            {title}
          </h2>
        </div>
        {/* pet info */}
        <div className="flex py-1">
          <p
            className="
               text-[12px]   
               font-bold 
               leading-[18px]
               tracking-wide
               text-neutral-60"
          >
            Genne: {gene} - Age: 0{age} months
          </p>
        </div>
        {/* price */}
        <div>
          <h4
            className="
               text-[14px]
               font-extrabold 
               leading-[20px]
               text-neutral-100"
          >
            {price.toLocaleString('id')} VND
          </h4>
        </div>
      </div>
    </div>
  );
};
