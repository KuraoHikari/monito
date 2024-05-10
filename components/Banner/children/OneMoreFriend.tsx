import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';

export const OneMoreFriend = () => {
  return (
    <div className="z-20 py-10">
      <div>
        <h1
          className="
                  z-10
                  text-[36px]
                  leading-[54px]
                  text-dark-blue-80 

                  md:text-[48px]
                  lg:text-[64px]

                  xl:text-[54px]
                  xl:leading-[54px]
                  
                  2xl:text-[64px]
                  "
        >
          One more friend
        </h1>
      </div>

      <div>
        <h2
          className="
                  text-[24px]
                  font-bold 
                  leading-[36px]
                  text-dark-blue-80 
                  md:text-[32px]
                  lg:text-[40px]
                  
                  xl:leading-[60px]

                  2xl:text-[50px]
                  "
        >
          Thousands more fun!
        </h2>
      </div>

      <div className="my-4 ">
        <p
          className="
                  text-[16px]
                  font-medium 
                  leading-[24px] 
                  text-neutral-80
                  
                  xl:text-[12px]
                  2xl:text-[16px]
                  "
        >
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
      </div>

      <div className="z-40 ml-2 mt-7 hidden sm:block">
        <Button
          size="lg"
          variant="outline"
          className="
                        rounded-full
                        border-2 
                        border-dark-blue-80
                        text-[12px] 
                        text-dark-blue-80 
                        hover:border-none
                        hover:bg-dark-blue-40
                        hover:text-white
                
                        sm:text-[1rem] 
                        lg:px-[28px] 
                        lg:py-[10px]"
        >
          View Intro <PlayCircle className="ml-2 h-4 w-4" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="
                        hidden
                        rounded-full 
                        border-2
                        border-dark-blue-80 
                        text-[12px] 
                        text-dark-blue-80
                        hover:border-none
                        hover:bg-dark-blue-40
                        hover:text-white
                        sm:text-[1rem] 
                        lg:px-[28px] 
                        lg:py-[10px]"
        >
          View Intro <PlayCircle className="ml-2 h-4 w-4" />
        </Button>
        <Button
          variant="default"
          className="
                        ml-3 
                        rounded-full 
                        bg-dark-blue-80 
                        text-[12px]
                        text-gray-200 
                        hover:bg-dark-blue-40 
                        sm:text-[1rem]
                        lg:px-[28px] 
                        lg:py-[10px]"
        >
          Explore Now
        </Button>
      </div>
      <div className="z-10 ml-2 mt-7 sm:hidden">
        <Button
          size="sm"
          variant="outline"
          className="
                        rounded-full
                        border-2 
                        border-dark-blue-80
                        text-[12px] 
                        text-dark-blue-80 
                        hover:border-none
                        hover:bg-dark-blue-40
                        hover:text-white
                
                        sm:text-[1rem] 
                        lg:px-[28px] 
                        lg:py-[10px]"
        >
          View Intro <PlayCircle className="ml-2 h-4 w-4" />
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="
                        hidden
                        rounded-full 
                        border-2
                        border-dark-blue-80 
                        text-[12px] 
                        text-dark-blue-80
                        hover:border-none
                        hover:bg-dark-blue-40
                        hover:text-white
                        sm:text-[1rem] 
                        lg:px-[28px] 
                        lg:py-[10px]"
        >
          View Intro <PlayCircle className="ml-2 h-4 w-4" />
        </Button>
        <Button
          variant="default"
          className="
                        ml-3 
                        rounded-full 
                        bg-dark-blue-80 
                        text-[12px]
                        text-gray-200 
                        hover:bg-dark-blue-40 
                        sm:text-[1rem]
                        lg:px-[28px] 
                        lg:py-[10px]"
        >
          Explore Now
        </Button>
      </div>
    </div>
  );
};
