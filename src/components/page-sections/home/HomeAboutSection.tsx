//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import clsx from 'clsx';
//                         PATH
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment } from 'react';
import { twMerge } from 'tailwind-merge';
import { NuknoeBGLightmode } from '../../../assets';
import { FWTImage } from '../../utils/FWTImage.tsx';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const HomeAboutSection: FunctionComponent = () => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      <section
        className={twMerge(
          clsx(
            'relative mx-auto flex flex-col gap-12 px-4 py-16',
            'tablet:flex-row tablet:gap-8 desktop:gap-16',
            'bg-black',
            'rounded-lg dark:bg-black dark:bg-opacity-35',
          ),
        )}
      >
        <div
          className={twMerge(
            clsx(
              'mx-auto w-full max-w-7xl px-5',
              'py-16 md:px-10 md:py-20',
              'bg-black dark:bg-transparent',
              'dark:backdrop-blur-md dark:backdrop-opacity-100',
            ),
          )}
        >
          {/* Title */}
          <h2 className='mb-8 text-3xl font-bold text-oh-yea-blue-light md:text-5xl lg:mb-14'>
            Meet Nuknoe
          </h2>
          <p className='mb-8 max-w-lg text-sm text-gray-500 text-snow-white sm:text-base lg:mb-24'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
            eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
            nulla, ut commodo diam libero vitae erat.
          </p>
          <div className='grid gap-10 lg:grid-cols-2 lg:gap-12'>
            <FWTImage
              src={NuknoeBGLightmode}
              alt=''
              className='inline-block h-full w-full rounded-2xl object-cover'
            />
            <div className='flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20'>
              <h2 className='text-3xl font-bold text-netflix-red md:text-5xl'>Biography</h2>
              <p className='text-sm text-gray-500 text-snow-white sm:text-base'>
                Aliquet risus feugiat in ante metus. Arcu dui vivamus arcu felis bibendum ut.
                Vestibulum lorem sed risus ultricies tristique nulla. Vitae et leo duis ut diam
                quam. Bibendum arcu vitae elementum curabitur vitae nunc. Dictumst vestibulum
                rhoncus est pellentesque. Lectus proin nibh nisl condimentum id. Ullamcorper
                dignissim cras tincidunt lobortis feugiat vivamus.
                <br />
                <br />
                Massa id neque aliquam vestibulum morbi blandit. Nulla pellentesque dignissim
                enim sit amet venenatis.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
