import Image from 'next/image';
import { Button } from '../ui/button';
import { PlayCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionBannerBrownProps {
  reverse: boolean;
  children?: React.ReactNode;
}

export const SectionBannerBrown = ({
  reverse,
  children,
}: SectionBannerBrownProps) => {
  return (
    <div
      className={cn(
        ' relative h-fit overflow-hidden rounded-[50px] ',
        reverse ? 'bg-orange-shine-40' : 'bg-dark-blue',
      )}
    >
      <div className="grid grid-cols-1 px-16  xl:grid-cols-2">
        <div className={cn('hidden xl:block', reverse ? 'order-last' : '')}>
          <div
            className={cn(
              'absolute  z-10 ',
              'h-[787px] w-[787px]',
              reverse ? '' : ' top-[42px]',
              reverse
                ? 'right-[-600px] rotate-45'
                : '[transform:matrix(0.9046,_0.4263,_-0.4263,_0.9046,_0,_0)]',
              'origin-top-left rounded-[99px]  ',
              reverse ? 'bg-orange-shine-20' : 'bg-dark-blue-80 ',
              reverse
                ? ''
                : 'lg:h-[735px] lg:w-[435px] xl:left-0 xl:h-[635px] xl:w-[535px] 2xl:h-[635px] 2xl:w-[935px]',
            )}
          ></div>

          <Image
            src={
              reverse
                ? '/banner/pngegg41.png'
                : '/banner/horizontalShotAdultGirlJeansOv.png'
            }
            alt=""
            width={944}
            height={693}
            className={cn(
              'absolute bottom-0 z-40  sm:h-[349px]  sm:w-[524px] ',
              reverse ? '-rotate-[70deg]' : 'left-0 ',
            )}
          />
        </div>
        <div className="">
          <div
            className={cn(
              'relative z-20 text-center text-dark-blue-80 ',
              reverse ? 'xl:text-left' : 'xl:text-right',
            )}
          >
            <div
              className={cn(
                'absolute  -z-10 ',
                reverse
                  ? 'left-[80px] top-[-460px] h-[635px] w-[782.2925px]'
                  : 'bottom-0 h-[1035px] w-[1035px]',
                reverse
                  ? 'rotate-[50deg]'
                  : '[transform:matrix(0.9046,_0.4263,_-0.4263,_0.9046,_0,_0)]',

                'origin-top-left rounded-[99px]  bg-moon-yellow-40',
                reverse
                  ? 'left-20 sm:left-36 md:left-48 lg:left-[200px] xl:left-20'
                  : 'lg:left-44 lg:top-[-380px] lg:h-[635px] lg:w-[735px] xl:top-[-350px] xl:h-[635px] xl:w-[935px] 2xl:top-[-380px] 2xl:h-[635px] 2xl:w-[935px]',
              )}
            ></div>
            {/* taruh disini */}
            {children}
          </div>
        </div>
        <div
          className={cn(
            'h-[250px]  xl:hidden',
            reverse ? 'sm:h-[440px]' : 'sm:h-[340px]',
          )}
        >
          <div
            className={cn(
              'absolute  z-10 ',
              'top-[42px] h-[787px] w-[787px]',
              '[transform:matrix(0.9046,_0.4263,_-0.4263,_0.9046,_0,_0)]',
              'origin-top-left rounded-[99px]  ',
              reverse ? 'bg-orange-shine-20' : 'bg-dark-blue-80',
              'lg:h-[735px] lg:w-[435px] xl:left-0 xl:h-[635px] xl:w-[535px] 2xl:h-[635px] 2xl:w-[935px]',
            )}
          ></div>
          <Image
            src={
              reverse
                ? '/banner/pngegg41.png'
                : '/banner/horizontalShotAdultGirlJeansOv.png'
            }
            alt=""
            width={944}
            height={693}
            className={cn(
              'absolute bottom-0 left-0 z-20 ',
              reverse
                ? ''
                : 'sm:left-20 sm:h-[349px] sm:w-[524px] md:left-32 lg:left-40',
            )}
          />
        </div>
      </div>
    </div>
  );
};
