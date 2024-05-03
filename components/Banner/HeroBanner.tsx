import { PlayCircle } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';

export const HeroBanner = () => {
  return (
    <div
      className="
        relative
        z-20 
        h-[988px] 
        overflow-hidden 
        rounded-b-[50px]
        bg-[linear-gradient(102.87deg,#FCEED5_6.43%,#FCEED5_78.33%,#FFE7BA_104.24%)]
      
        md:h-[1088px]
        lg:h-[695px]"
    >
      <div className="">
        {/* Hero Text */}
        <div
          className="
            mx-8
            pt-[180px] 
            md:mx-24
            lg:ml-[130px]

            lg:w-1/3 
            lg:pt-[100px]
            xl:pt-[180px]"
        >
          {/* Hero Title */}
          <div>
            <h1
              className="
                z-10
                text-[60px]
                font-bold 
                leading-[68px]
                text-dark-blue-80"
            >
              One more friend
            </h1>
          </div>
          {/* Hero SubTitle */}
          <div>
            <h2
              className="
                  text-[50px]
                
                  leading-[60px] 
                  text-dark-blue-80"
            >
              Thousands more fun!
            </h2>
          </div>
          {/* Hero Desc */}
          <div className="my-4 pl-[0.5rem]">
            <p
              className="
                text-[16px] 
                font-medium 
                leading-[24px] 
                text-neutral-80 
                lg:max-w-[380px] 
                xl:max-w-[480px]"
            >
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
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
                hover:text-neutral-00

                sm:text-[1rem] 
                lg:px-[28px] 
                lg:py-[10px]"
            >
              View Intro <PlayCircle className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="default"
              size="lg"
              className="
                ml-3 
                rounded-full 

                bg-dark-blue-80

                text-[12px]
                text-neutral-00 
                hover:bg-dark-blue-40
                 
                sm:text-[1rem]
                lg:px-[28px] 
                lg:py-[10px]"
            >
              Explore Now
            </Button>
          </div>
        </div>
        {/* Hero Image */}
        <Image
          src="/banner/goodHumoredWomanHoldsDogLaughi.png"
          alt=""
          width={944}
          height={693}
          className="
              absolute 
              bottom-0 

              z-20 
              
              lg:left-[230px] 
              lg:top-[84px] 
              xl:left-[430px]
              2xl:left-[530px]"
        />
        <div
          className="
            absolute 
            bottom-0 
            left-32
            z-10  
            h-[335px]  
            w-[335px]
            rounded-[99px]

            bg-dark-blue 
            [transform:matrix(0.9867,_0.1625,_-0.1625,_0.9867,_0,_0)] 

            md:left-80 
            md:h-[435px] 
            md:w-[435px] 
            lg:left-[500px] 
            lg:top-[268px]
            lg:h-[635px]

            lg:w-[635px] 
            xl:left-[600px]
            xl:top-[310px]
            
            2xl:left-[650px]
            2xl:top-[310px]
            "
        />
        <div
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
            lg:left-[665px] 
            lg:top-[180px] 
            lg:h-[635px] 
            lg:w-[635px] 

            xl:left-[830px]
            2xl:left-[900px]
            "
        />
        <div
          className="
            absolute 
            left-[438.334px] 
            top-[564px] 
            h-[635px] 
            w-[635px] 
            origin-top-left 
            rounded-[99px] 
            bg-moon-yellow
            opacity-40 
            [transform:matrix(0.5524,_0.8336,_-0.8336,_0.5524,_0,_0)]"
        />

        <div
          className="
            absolute 
            -left-[64.3297px] 
            -top-[697px] 
            h-[635px] 
            w-[635px] 
            origin-top-left 
            rounded-[99px] 
            bg-moon-yellow
            [transform:matrix(0.9046,_0.4263,_-0.4263,_0.9046,_0,_0)]"
        />

        <div
          className="
            absolute
            left-[140.6029px] 
            top-[163px] 
            -z-10 
            h-[67.1033px] 
            w-[67.1033px] 
            origin-top-left 
            rounded-[20px] 
            bg-moon-yellow
            [transform:matrix(0.9046,_0.4263,_-0.4263,_0.9046,_0,_0)]"
        />
        <div
          className="
            absolute
            left-[762.192px] 
            top-[148px] 
            -z-10 
            h-[14.6264px] 
            w-[14.6264px] 
            origin-top-left 
            rounded-[4px] 
            bg-moon-yellow
            [transform:matrix(0.9349,_0.355,_-0.355,_0.9349,_0,_0)]"
        />

        <div
          className="
          absolute
          left-[728px] 
          top-[210.678px] -z-10 
          h-[27.4976px] 
          w-[27.4976px] 
          origin-top-left 
          rounded-[9px] 
          bg-moon-yellow
          [transform:matrix(0.9215,_-0.3883,_0.3883,_0.9215,_0,_0)]"
        />

        <div
          className="
          absolute
          left-[727px] 
          top-[223.6443px] 
          -z-10 
          h-[21.4707px] 
          w-[21.4707px] 
          origin-top-left 
          rounded-[6px] 
          bg-dark-blue-80 
          [transform:matrix(0.7313,_-0.6821,_0.6821,_0.7313,_0,_0)]"
        />
      </div>
    </div>
  );
};
