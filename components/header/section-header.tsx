import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

interface SectionHeaderProps {
 buttonText?: string | null;
 title: string;
 subTitle?: string;
}

const SectionHeader = ({ buttonText, title, subTitle }: SectionHeaderProps) => {
 return (
  <div className="flex justify-between py-[28px] px-[130px]">
   <div className="align-middle">
    <h4 className="text-lg">{subTitle}</h4>
    <h1 className="text-[#002a48] font-bold text-2xl">{title}</h1>
   </div>
   <div>
    <Button
     className="mt-4
     rounded-full 
                text-[#003459] 
                sm:text-[1rem] 
                text-[12px] 
                border-[#003459] 
                hover:bg-[#0078CD] 
                hover:text-white
                hover:border-none
                border-2 
                lg:py-[10px] 
                lg:px-[28px]"
    >
     {buttonText}
     <ChevronRight className="ml-2 h-4 w-4" />
    </Button>
   </div>
  </div>
 );
};

export default SectionHeader;
