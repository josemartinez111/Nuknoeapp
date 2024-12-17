// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                APP > PAGES > ROOT_LAYOUT.TSX
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { Outlet } from 'react-router-dom';
import { Fragment, FunctionComponent } from 'react';
import { twMerge } from 'tailwind-merge';
import { NuknoeBGDarkmode } from '../../../assets';
import { Footer, Navbar } from '../../../components';
import { useDarkModeStore } from '../../../lib';
import clsx from 'clsx';
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const RootLayout: FunctionComponent = () => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  const { isDarkMode } = useDarkModeStore();

  // const rootLayoutContainer = twMerge(
  //   clsx(' min-h-screen bg-white text-gray-700 transition-colors', ' duration-300'),
  // );
  //`bg-[url('/images/nuknoe-darkmode.png')]`
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      <div className={isDarkMode ? 'dark' : ''}>
        <div
          className={twMerge(
            clsx(
              'relative min-h-screen w-full overflow-hidden',
              'transition-all duration-300 ease-in-out',
              isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900',
            ),
          )}
        >
          {/* Background Image */}
          <div className='fixed inset-0 z-0 h-full min-h-screen w-full'>
            <img
              src={NuknoeBGDarkmode}
              alt='Background'
              className='hidden h-[75vh] w-full object-cover object-top tablet:h-auto tablet:min-h-full tablet:scale-105 dark:block'
              style={{
                imageRendering: '-webkit-optimize-contrast',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0) scale(1.02)',
                willChange: 'transform',
              }}
            />

            {/*<img*/}
            {/*  src={NuknoeBGAlbumCover}*/}
            {/*  alt='Background'*/}
            {/*  className='h-[75vh] w-full object-cover object-top tablet:h-auto tablet:min-h-full tablet:scale-105'*/}
            {/*  style={{*/}
            {/*    imageRendering: '-webkit-optimize-contrast',*/}
            {/*    backfaceVisibility: 'hidden',*/}
            {/*    transform: 'translateZ(0) scale(1.02)',*/}
            {/*    willChange: 'transform',*/}
            {/*  }}*/}
            {/*/>*/}
          </div>

          {/* Separate Overlay */}
          <div className='fixed inset-0 z-[1] dark:bg-black/65' />

          {/* Content Container */}
          <div className='relative z-[2] flex min-h-screen flex-col'>
            <Navbar />
            <main className='flex-1'>
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      </div>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
