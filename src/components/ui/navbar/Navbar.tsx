//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import clsx from 'clsx';
//                  COMPONENTS > UI > NAVBAR.TSX
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment } from 'react';
import { FiMenu } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';
import { NuknoeBlackText, NuknoeWhiteText } from '../../../assets';
import { SocialIcons, FWTImage, IconNameType } from '../../../components';
import { useDarkModeStore } from '../../../lib';
import { ToggleDarkmodeIcons } from './ToggleDarkmodeIcons.tsx';
// import { twMerge } from 'tailwind-merge';
// import clsx from 'clsx';
// import { atom, useAtom } from 'jotai';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// Type for navigation link
// type NavLink = {
//   id: number;
//   label: string;
//   href: string;
// }

// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// Atom for managing sidebar state
// const sidebarAtom = atom(false);
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const Navbar: FunctionComponent = () => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();

  // Use the IconName type directly for the array
  const socialIconsOpts: Array<IconNameType> = [
    'youtube',
    'facebook',
    'instagram',
    'tiktok',
    'threads',
  ];

  // const [isSidebarOpen, setIsSidebarOpen] = useAtom(sidebarAtom);
  //
  // // Placeholder links
  // const navLinks: NavLink[] = [
  //   { id: 1, label: 'Home', href: '#' },
  //   { id: 2, label: 'About', href: '#' },
  //   { id: 3, label: 'Contact', href: '#' },
  // ];

  const navContainerClasses = twMerge(
    clsx(
      'relative mx-auto pt-6 flex h-[6rem] w-full items-center',
      ' justify-between border-b border-transparent bg-transparent px-8',
    ),
  );
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      <header>
        <nav className={navContainerClasses}>
          {/* LOGO ∞∞∞ */}
          <div className='inline-flex'>
            <a className='_o6689fn' href='/'>
              {/* Dark/Light text logo toggle ∞∞∞ */}
              <div className='md:block'>
                {/* Show White Text in Dark Mode */}
                <FWTImage
                  src={NuknoeWhiteText}
                  alt='Nuknoe white text'
                  className='ml-[1.2rem] hidden h-12 w-auto object-contain tablet:h-16 desktop:h-24 dark:block'
                />
                {/* Show Black Text in Light Mode */}
                <FWTImage
                  src={NuknoeBlackText}
                  alt='Nuknoe black text'
                  className='ml-[1.2rem] block h-12 w-auto object-contain tablet:h-16 desktop:h-24 dark:hidden'
                />
              </div>
            </a>
          </div>
          {/* END OF LOGO ∞∞∞ */}

          {/* SOCIAL ICONS ∞∞∞ */}
          <div
            className={twMerge(
              clsx(
                'hidden items-center gap-2 pl-16 text-black tablet:flex',
                'tablet:gap-6 desktop:gap-8',
              ),
            )}
          >
            {socialIconsOpts.map((icon: IconNameType) => (
              <SocialIcons
                key={icon}
                iconName={icon}
                className={twMerge(
                  clsx(
                    'w-3 text-black',
                    'tablet:h-6 tablet:w-6 desktop:w-6',
                    'dark:text-snow-white',
                  ),
                )}
              />
            ))}
          </div>
          {/* END OF SOCIAL ICONS ∞∞∞ */}

          {/* Hamburger Button and Toggle Icons ∞∞∞ */}
          <div className='flex-initial'>
            <div
              className={twMerge(
                clsx('relative ml-32 flex items-center', 'justify-end space-x-2'),
              )}
            >
              {/* Toggle Darkmode Icons ∞∞∞ */}
              <ToggleDarkmodeIcons
                onClick={toggleDarkMode}
                condition={isDarkMode}
                className='ml-[0.75rem] scale-75 desktop:w-auto desktop:scale-100'
                sunClassName='text-oh-yea-blue-light'
                moonClassName='text-netflix-red'
              />

              {/* Hamburger Button */}
              <button
                type='button'
                className={twMerge(
                  clsx(
                    'flex scale-75 items-center rounded-full border px-5 py-1 hover:shadow-lg',
                    'border-black dark:border-white',
                  ),
                )}
              >
                {/* Hamburger Icon */}
                <FiMenu className='w-11 text-current desktop:h-5 desktop:w-5 dark:text-snow-white' />

                {/* Optional Logo/Image */}
                <div className='ml-3'>
                  {/* Show this only in dark mode */}
                  <FWTImage
                    src={NuknoeWhiteText}
                    alt='Nuknoe white text'
                    className='hidden h-[2.5rem] w-auto object-contain desktop:h-[3.5rem] dark:block'
                  />

                  {/* Show this only in light mode */}
                  <FWTImage
                    src={NuknoeBlackText}
                    alt='Nuknoe black text'
                    className='block h-[2.5rem] w-auto object-contain desktop:h-[3.5rem] dark:hidden'
                  />
                </div>
              </button>
            </div>
          </div>
          {/* END LOGIN ∞∞∞ */}
        </nav>
      </header>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
