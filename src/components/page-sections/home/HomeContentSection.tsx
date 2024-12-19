//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                         PATH
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment } from 'react';
import { GiMusicSpell } from 'react-icons/gi';
import { NuknoeBGAlbumCover } from '../../../assets';
import { BGGradientEffects } from '../../ui/effects/BGGradientEffects.tsx';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const HomeContentSection: FunctionComponent = () => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      <div className='mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20'>
        <div className='grid gap-10 lg:grid-cols-2'>
          <div className='flex flex-col justify-center md:pr-8 lg:max-w-lg xl:pr-0'>
            <div className='bg-teal-accent-400 mb-4 flex h-16 w-16 items-center justify-center rounded-full'>
              {/* SVG MUSIC NOTES ∞∞∞ */}
              <GiMusicSpell className='cursor-pointer text-5xl text-oh-yea-blue-light hover:text-gray-900' />
            </div>
            <div className='mb-6 max-w-xl dark:text-snow-white'>
              <BGGradientEffects />

              <h2 className='mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none dark:text-snow-white'>
                Let us handle
                <br className='hidden md:block' />
                your next{' '}
                <span className='text-deep-purple-accent-400 inline-block'>destination</span>
              </h2>
              <p className='text-base md:text-lg dark:text-snow-white'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
              </p>
            </div>
            <div>
              <a
                href='/'
                aria-label=''
                className='text-deep-purple-accent-400 hover:text-deep-purple-800 inline-flex items-center font-semibold transition-colors duration-200'
              >
                Learn more
                <svg className='ml-2 inline-block w-3' fill='currentColor' viewBox='0 0 12 12'>
                  <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
                </svg>
              </a>
            </div>
          </div>
          <div className='-mx-4 flex items-center justify-center lg:pl-8'>
            <div className='flex flex-col items-end px-3'>
              <img
                className='mb-6 h-28 w-28 rounded object-cover shadow-lg sm:h-48 sm:w-48 xl:h-56 xl:w-56'
                src={NuknoeBGAlbumCover}
                alt=''
              />
              <img
                className='h-20 w-20 rounded object-cover shadow-lg sm:h-32 sm:w-32 xl:h-40 xl:w-40'
                src={NuknoeBGAlbumCover}
                alt=''
              />
            </div>
            <div className='px-3'>
              <img
                className='h-40 w-40 rounded object-cover shadow-lg sm:h-64 sm:w-64 xl:h-80 xl:w-80'
                src={NuknoeBGAlbumCover}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
