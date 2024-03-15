import { PetProductType } from "@/types/pet-type";
import Image from "next/image";

export interface PetProductProps {
 product: PetProductType;
}

const PetCard = ({ product }: PetProductProps) => {
 const { title, gene, age, price, image } = product;

 return (
  <div
   className="
      
        w-fit
        p-2 
        border-gray-50 
        border-[0.1px] rounded-xl  
        shadow-lg
        bg-white
  "
  >
   {/* Image */}

   <Image
    src={image}
    alt={`${title}.png`}
    width={264}
    height={264}
    className="
   
        overflow-hidden 
        object-cover
        rounded-xl
        "
   />

   {/* Desc */}
   <div className="py-4">
    {/* title */}
    <div className="">
     <h2
      className="
     text-[16px] 
     leading-[24px]
     font-extrabold
  
     "
     >
      {title}
     </h2>
    </div>
    {/* pet info */}
    <div className="flex py-1">
     <p
      className="
      text-gray-500   
      text-[12px] 
      leading-[18px]
      font-bold
      tracking-wide
      "
     >
      Genne: {gene} - Age: 0{age} months
     </p>
    </div>
    {/* price */}
    <div>
     <h4
      className="
        text-[14px] 
        leading-[20px]
        font-extrabold
        "
     >
      {price.toLocaleString("id")} VND
     </h4>
    </div>
   </div>
  </div>
 );
};

export default PetCard;
