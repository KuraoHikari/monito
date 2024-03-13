import { PlayCircle } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div
      className="
        overflow-hidden
        relative 
        z-20 
        bg-[linear-gradient(102.87deg,#FCEED5_6.43%,#FCEED5_78.33%,#FFE7BA_104.24%)] 
        lg:h-[695px]
        md:h-[1088px]
      
        h-[988px]
        rounded-b-[50px]
        "
    >
      <div className="">
        {/* Hero Text */}
        <div
          className="
        lg:w-1/3
        lg:ml-[130px] 
        md:mx-24
        mx-8

        pt-[180px] 
        lg:pt-[100px]
        xl:pt-[180px]
        text-[#002a48]

        
  "
        >
          {/* Hero Title */}
          <div>
            <h1
              className="
      z-10
      text-[#002a48] 
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
       text-[#002a48] 
       font-bold 
       text-[50px] 
       leading-[60px]"
            >
              Thousands more fun!
            </h2>
          </div>
          {/* Hero Desc */}
          <div className="pl-[0.5rem] my-4">
            <p
              className="
       lg:max-w-[380px] 
       xl:max-w-[480px] 
       text-[#242b33] 
       font-medium 
       text-[16px] 
       leading-[24px] "
            >
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
          </div>
          {/* Hero Buton Section */}
          <div className="ml-2 mt-7 z-10">
            <Button
              size="lg"
              variant="outline"
              className="
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
                bg-[#003459] 
                hover:bg-[#0078CD] 
                lg:py-[10px] 
                lg:px-[28px]
       "
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
        z-20 
        absolute 

        xl:left-[730px] 
        lg:top-[84px] 
        lg:left-[330px] 
        bottom-0
     "
        />
        <div
          className="
        z-10 

        md:left-80
        lg:top-[268px]
        xl:left-[900px]  
        lg:left-[500px]  

        bottom-0
        left-32

        absolute 
        lg:w-[635px] 
        lg:h-[635px] 
        md:w-[435px] 
        md:h-[435px] 
        w-[335px] 
        h-[335px] 
        rounded-[99px] 
        bg-[#003459]
        [transform:matrix(0.9867,_0.1625,_-0.1625,_0.9867,_0,_0)]
     "
        />
        <div
          className="
        z-10 
        origin-top-left 
        absolute

        md:left-80
        lg:top-[180px]
        lg:left-[665px]  
        xl:left-[1165px] 

        bottom-0
        left-52

        lg:w-[635px] 
        lg:h-[635px] 
        md:w-[435px] 
        md:h-[435px] 
        w-[335px] 
        h-[335px] 
        rounded-[99px] 
        bg-[#f7dba7] 
        [transform:matrix(0.9046,_0.4263,_-0.4263,_0.9046,_0,_0)]
     "
        />
        <div
          className="
    opacity-40 
    origin-top-left 
    absolute 
    left-[438.334px] 
    top-[564px] 
    w-[635px] 
    h-[635px] 
    rounded-[99px] 
    bg-[#f7dba7] 
    [transform:matrix(0.5524,_0.8336,_-0.8336,_0.5524,_0,_0)]"
        />

        <div
          className="
    origin-top-left 
    absolute 
    -left-[64.3297px] 
    -top-[697px] 
    w-[635px] 
    h-[635px] 
    rounded-[99px] 
    bg-[#f7dba7] 
    [transform:matrix(0.9046,_0.4263,_-0.4263,_0.9046,_0,_0)]
    "
        />

        <div
          className="
     -z-10
    origin-top-left 
    absolute 
    left-[140.6029px] 
    top-[163px] 
    w-[67.1033px] 
    h-[67.1033px] 
    rounded-[20px] 
    bg-[#f7dba7] 
    [transform:matrix(0.9046,_0.4263,_-0.4263,_0.9046,_0,_0)]
    "
        />
        <div
          className="
     -z-10
    origin-top-left 
    absolute 
    left-[762.192px] 
    top-[148px] 
    w-[14.6264px] 
    h-[14.6264px] 
    rounded-[4px] 
    bg-[#f7dba7] 
    [transform:matrix(0.9349,_0.355,_-0.355,_0.9349,_0,_0)]
    "
        />

        <div
          className="
     -z-10
     origin-top-left 
     absolute left-[728px] 
     top-[210.678px] 
     w-[27.4976px] 
     h-[27.4976px] 
     rounded-[9px] 
     bg-[#f7dba7] 
     [transform:matrix(0.9215,_-0.3883,_0.3883,_0.9215,_0,_0)]
    "
        />

        <div
          className="
     -z-10
    origin-top-left 
    absolute 
    left-[727px] 
    top-[223.6443px] 
    w-[21.4707px] 
    h-[21.4707px] 
    rounded-[6px] 
    bg-[#002a48] 
    [transform:matrix(0.7313,_-0.6821,_0.6821,_0.7313,_0,_0)]"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
