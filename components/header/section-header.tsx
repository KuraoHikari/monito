import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

interface SectionHeaderProps {
  buttonText?: string | null;
  title: string;
  subTitle?: string;
}

const SectionHeader = ({ buttonText, title, subTitle }: SectionHeaderProps) => {
  return (
    <div className="flex justify-between px-5 py-[28px] sm:px-[130px]">
      <div className="align-middle">
        {subTitle && <h4 className="text-lg">{subTitle}</h4>}
        <h1 className="text-2xl font-bold text-[#002a48]">{title}</h1>
      </div>
      <div>
        {buttonText && (
          <Button
            className="
                mx-4
                mt-4 
                rounded-full 
                border-2 
                border-[#003459] 
                text-[12px] 
                text-[#003459] 
                hover:border-none
                hover:bg-[#0078CD]
                hover:text-white 
                sm:text-[1rem]
                lg:px-[28px] 
                lg:py-[10px]"
          >
            {buttonText}
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
