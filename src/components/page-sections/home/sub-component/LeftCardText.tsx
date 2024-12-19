//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                         PATH
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { LinkButtonWrapper } from '../partners/LinkButtonWrapper.tsx';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const LeftCardText: FunctionComponent = () => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      <div className='mb-10 lg:mb-0 lg:max-w-lg lg:pr-5'>
        <div className='mb-6 max-w-xl'>
          <div>
            <p
              className={twMerge(
                clsx(
                  'bg-teal-accent-400 mb-4 inline-block',
                  'rounded-full px-3 py-px text-xs font-semibold',
                  'uppercase tracking-wider text-teal-900',
                  'bg-gray-800 text-white dark:bg-oh-yea-blue-light',
                ),
              )}
            >
              Brand new
            </p>
          </div>
          <h2 className='mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none dark:text-white'>
            From Lyrics to Literature:
            <br className='hidden md:block' />
            Stories{' '}
            <span className='text-deep-purple-accent-400 dark:text-deep-purple-200 inline-block'>
              That Inspire
            </span>
          </h2>
          <p className='text-base text-gray-700 md:text-lg dark:text-gray-300'>
            Whether it’s through the rhythm of a verse or the pages of a book, I bring stories
            to life. Support my journey as a rap artist and author, where every word is crafted
            to connect, inspire, and empower. Your support keeps the music playing and the
            stories flowing
          </p>
        </div>

        {/* Buttons */}
        <div className='flex flex-col items-center md:flex-row'>
          {/* Support My Music Button */}
          <LinkButtonWrapper text={'Support My Music'} />
          {/* Promotional Link */}
          <a
            href='/discount'
            className='hover:text-deep-purple-accent-700 dark:hover:text-deep-purple-300 inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 dark:text-gray-200'
          >
            Buy my book & get 30% off
          </a>
        </div>
      </div>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
