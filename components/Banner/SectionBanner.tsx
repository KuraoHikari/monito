import { PlayCircle } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';

export const SectionBanner = () => {
  return (
    <div
      className="
        relative 
        h-fit
        overflow-hidden 
        rounded-[50px]
        bg-dark-blue"
    >
      {/* <div
        className="
          absolute 
          bottom-0 
          left-52

          z-10
          h-[335px]
          w-[335px]  
          origin-top-left 

          rounded-[99px]
          bg-moon-yellow

          [transform:matrix(0.9046,_0.4263,_-0.4263,_0.9046,_0,_0)] 

          md:left-80 
          md:h-[435px] 
          md:w-[435px] 

          lg:left-[635px] 
          lg:top-[-380px] 
          lg:h-[635px] 
          lg:w-[735px]
          
          xl:left-[970px] 

        
          2xl:h-[935px]
          2xl:w-[935px]"
      ></div> */}
      {/* <div className="absolute"></div> */}
      <div className="grid grid-cols-1 px-16  xl:grid-cols-2">
        <div className="hidden xl:block">
          <div
            className="
              absolute
             
              top-[42px]
              z-10

              h-[787px] 
              w-[787px]
              origin-top-left  
              rounded-[99px] 

              bg-dark-blue-80
              [transform:matrix(0.9046,_0.4263,_-0.4263,_0.9046,_0,_0)]
              

              lg:h-[735px] 
              lg:w-[435px]

              xl:left-0

              xl:h-[635px]
              xl:w-[535px]
              
              2xl:h-[635px]
              2xl:w-[935px]"
          ></div>
          <Image
            src="/banner/horizontalShotAdultGirlJeansOv.png"
            alt=""
            width={944}
            height={693}
            className="
              absolute

              bottom-0
              z-20 
            
              h-[348px] 
              w-[472px]
              
             
              2xl:left-36
              "
          />
        </div>
        <div className="">
          <div
            className="
              relative
              z-20
              text-center
              text-dark-blue-80
              xl:text-right
              "
          >
            <div
              className="
              absolute
              bottom-0 
              left-60
              -z-10

              h-[1035px] 
              w-[1035px]
              origin-top-left  
              rounded-[99px] 

              bg-moon-yellow
              [transform:matrix(0.9046,_0.4263,_-0.4263,_0.9046,_0,_0)]

           

              lg:left-44

          
              lg:top-[-380px] 
              lg:h-[635px] 
              lg:w-[735px]

              xl:top-[-350px]
              xl:h-[635px]
              xl:w-[935px]
              
              2xl:top-[-380px]
              
              2xl:h-[635px]
              2xl:w-[935px]"
            ></div>
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
              {/* Hero SubTitle */}
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
              {/* Hero Desc */}
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
                  Having a pet means you have more joy, a new friend, a happy
                  person who will always be with you to have fun. We have 200+
                  different pets that can meet your needs!
                </p>
              </div>
              {/* Hero Buton Section */}
              <div className="z-10 ml-2 mt-7">
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
          </div>
        </div>
        <div
          className="
          h-[340px]
          xl:hidden
        "
        >
          <div
            className="
              absolute
             
              top-[42px]
              z-10

              h-[787px] 
              w-[787px]
              origin-top-left  
              rounded-[99px] 

              bg-dark-blue-80
              [transform:matrix(0.9046,_0.4263,_-0.4263,_0.9046,_0,_0)]
              

              lg:h-[735px] 
              lg:w-[435px]

              xl:left-0

              xl:h-[635px]
              xl:w-[535px]
              
              2xl:h-[635px]
              2xl:w-[935px]"
          ></div>
          <Image
            src="/banner/horizontalShotAdultGirlJeansOv.png"
            alt=""
            width={944}
            height={693}
            className="
              absolute
              bottom-0
              left-0

              z-20
            
              h-[349px]
              w-[524px]

              sm:left-20
              md:left-32
              lg:left-40
              "
          />
        </div>
      </div>
    </div>
  );
};
