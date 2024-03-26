import { PlayCircle } from "lucide-react";
import { Button } from "../ui/button";

export const SectionBanner = () => {
 return (
  <div
   className="
        relative 
        bg-dark-blue-80 
        h-[378px] 
        overflow-hidden
        rounded-[50px]"
  >
   <div
    className="z-10 
        origin-top-left 
        absolute

        md:left-80
        lg:top-[-380px]
        lg:left-[635px]  
        xl:left-[970px] 

        bottom-0
        left-52

        lg:w-[735px] 
        lg:h-[635px] 
        md:w-[435px] 
        md:h-[435px] 
        w-[335px] 
        h-[335px] 
        rounded-[99px] 
        bg-mon-yellow
        [transform:matrix(0.9046,_0.4263,_-0.4263,_0.9046,_0,_0)]"
   ></div>
   <div className="absolute"></div>
   <div className="grid grid-cols-2">
    <div className=""></div>
    <div className="z-20">
     <div
      className="
        text-dark-blue-80
        text-right
        pr-16
        pt-10
        "
     >
      {/* Hero Title */}
      <div>
       <h1
        className="
      z-10
      text-dark-blue-80
      text-[64px] 
      leading-[68px]"
       >
        One more friend
       </h1>
      </div>
      {/* Hero SubTitle */}
      <div>
       <h2
        className="
       text-dark-blue-80
       font-bold 
       text-[50px] 
       leading-[60px]"
       >
        Thousands more fun!
       </h2>
      </div>
      {/* Hero Desc */}
      <div className="pl-32 my-4 ">
       <p
        className="
   
       text-neutral-80
       font-medium 
       text-[16px] 
       leading-[24px] "
       >
        Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We
        have 200+ different pets that can meet your needs!
       </p>
      </div>
      {/* Hero Buton Section */}
      <div className="ml-2 mt-7 z-10">
       <Button
        size="lg"
        variant="outline"
        className="
                rounded-full 
                text-dark-blue-80
                sm:text-[1rem] 
                text-[12px] 
                border-dark-blue-80
                hover:bg-dark-blue-40
                hover:text-white
                hover:border-none
                border-2 
                lg:py-[10px] 
                lg:px-[28px]
       "
       >
        View Intro <PlayCircle className="ml-2 h-4 w-4" />
       </Button>
       <Button
        variant="default"
        className="
                ml-3 
                rounded-full 
                text-gray-200 
                sm:text-[1rem]
                text-[12px] 
                bg-dark-blue-80 
                hover:bg-dark-blue-40
                lg:py-[10px] 
                lg:px-[28px]
       "
       >
        Explore Now
       </Button>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};
