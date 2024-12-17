// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import clsx from 'clsx';
//                        HOME.PAGE.TSX
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';
import { NuknoeBGLightmode2 } from '../../../../assets';
import { FWTImage, HomeHeroSection } from '../../../../components';
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export default function HomePage() {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      {/* HERO SECTION ∞∞∞ */}
      <HomeHeroSection />

      {/* PRICING SECTION ∞∞∞ */}
      <div
        className={twMerge(
          clsx(
            'relative mx-auto flex flex-col gap-12 px-4 py-56',
            'tablet:flex-row tablet:gap-8 desktop:gap-16',
            'bg-snow-white bg-opacity-15',
            'dark:bg-gray-950 dark:bg-opacity-70',
          ),
        )}
      >
        {/* Background Image - Visible only in light mode */}
        <img
          src={NuknoeBGLightmode2}
          alt='Background'
          className='absolute inset-0 h-full w-full object-cover opacity-15 dark:hidden'
          style={{
            imageRendering: '-webkit-optimize-contrast',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0) scale(1.02)',
            willChange: 'transform',
          }}
        />

        {/* Content - Plan Card */}
        <div className='relative z-10 overflow-hidden rounded-xl bg-white shadow-md tablet:w-1/2 dark:bg-transparent dark:shadow-lg dark:backdrop-blur-md dark:backdrop-opacity-100'>
          <div className='flex flex-col tablet:flex-row'>
            {/* Image Section */}
            <div className='shrink-0'>
              <FWTImage
                className='h-48 w-full object-cover tablet:h-full tablet:w-48'
                src={NuknoeBGLightmode2}
                alt='Promo Image'
              />
            </div>

            {/* Content Section */}
            <div className='p-6 tablet:p-8'>
              <div className='text-sm font-semibold uppercase tracking-wide text-indigo-500 dark:text-indigo-400'>
                Basic Plan
              </div>
              <a
                href='#'
                className='mt-1 block text-lg font-medium leading-tight text-black hover:underline dark:text-white'
              >
                Best for small teams
              </a>
              <p className='mt-2 text-slate-500 dark:text-gray-400'>
                Includes all the core features, up to 5 users, and email support.
              </p>

              {/* Toggle */}
              <div className='mt-6 flex items-center'>
                <span className='mr-3 text-slate-600 dark:text-gray-400'>Monthly</span>
                <label htmlFor='toggle' className='flex cursor-pointer items-center'>
                  <div className='relative'>
                    <input type='checkbox' id='toggle' className='peer sr-only' />
                    <div className='block h-8 w-14 rounded-full bg-slate-300 transition-all duration-300 peer-checked:bg-indigo-500 dark:bg-gray-600 dark:peer-checked:bg-indigo-400'></div>
                    <div className='dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-all duration-300 peer-checked:translate-x-6 dark:bg-gray-300'></div>
                  </div>
                </label>
                <span className='ml-3 text-slate-600 dark:text-gray-400'>Yearly</span>
              </div>

              {/* Pricing */}
              <div className='mt-4'>
                <span className='text-3xl font-bold text-slate-900 dark:text-white'>$29</span>
                <span className='text-slate-500 dark:text-gray-400'>/mo</span>
              </div>

              <button className='mt-8 w-full rounded-md bg-indigo-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-indigo-600 dark:bg-indigo-400 dark:hover:bg-indigo-500'>
                Choose Plan
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Article Section */}
        <article className='relative isolate mx-auto flex flex-col justify-end overflow-hidden rounded-2xl tablet:w-1/2'>
          {/* Background Image */}
          <img
            src='https://images.unsplash.com/photo-1499856871958-5b9627545d1a'
            alt='Image of Paris'
            className='absolute inset-0 h-full w-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 dark:from-black dark:via-black/60'></div>

          {/* Content */}
          <div className='relative z-10 p-8 tablet:pb-12'>
            <h3 className='text-3xl font-bold text-white'>Paris</h3>
            <p className='mt-2 text-sm leading-6 text-gray-300'>City of art</p>
          </div>
        </article>
      </div>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
}
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
