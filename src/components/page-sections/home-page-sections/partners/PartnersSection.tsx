// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//   COMPONENTS > PAGES > HOME_PAGE_SECTIONS >> PARTNERS_SECTION.TSX
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { Fragment, FunctionComponent } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { YouthMassHire, YouthPrograms } from '../../../../assets';
import { FFTWImage, PartnerCategoryType, Show, usePartners } from '../../../../components';
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// Partner categories with their respective lists

export const PartnersSection: FunctionComponent = () => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  const {
    PARTNER_CATEGORIES,
    YOUTH_PROGRAM_DATA,
    baseCardStyles,
    baseTextStyles,
    baseHeadingStyles,
    baseImageStyles,
  } = usePartners();
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      <div className='bg-white py-16 transition-colors duration-300 dark:bg-gray-900'>
        <div className='mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8'>
          {/* Header remains the same */}
          <div className='text-center'>
            <h2 className='text-base font-semibold text-indigo-600 dark:text-indigo-400'>
              Our Valued Partners
            </h2>
            <p className='mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance dark:text-gray-100'>
              Together We Make a Difference
            </p>
            <p className='mx-auto mt-6 max-w-3xl text-lg text-gray-600 desktop:mb-24 dark:text-gray-400'>
              We gratefully acknowledge the contributions and support from our partners who
              help make our mission possible. Together, we're building a stronger, healthier
              community.
            </p>
          </div>

          {/* Updated grid container with centering */}
          <div className='mt-12'>
            <dl className='mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-2'>
              {PARTNER_CATEGORIES.map((category: PartnerCategoryType) => {
                const Icon = category.icon;
                const isYouthProgram: boolean =
                  category.title === 'Food For The World Youth Engagement Programs';

                return (
                  <div
                    key={category.title}
                    className={twMerge(
                      clsx(
                        (category.title === 'Foundations & Trusts' || isYouthProgram) &&
                          'lg:col-span-2',
                      ),
                    )}
                  >
                    <div className='relative pl-14'>
                      <dt className={twMerge('mb-4 text-lg', baseHeadingStyles)}>
                        <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500'>
                          <Icon className='h-6 w-6 text-white' aria-hidden='true' />
                        </div>
                        {category.title}
                      </dt>

                      {/* Youth Programs have a different layout */}
                      <Show
                        condition={isYouthProgram}
                        then={
                          <dd className='grid grid-cols-1 gap-6 pr-12 lg:grid-cols-2'>
                            <div className='space-y-6'>
                              {/* Program Cards */}
                              {YOUTH_PROGRAM_DATA.partners.map((partner: string) => (
                                <div key={partner} className={baseCardStyles}>
                                  <h3 className={twMerge('mb-3 text-xl', baseHeadingStyles)}>
                                    {partner.split(':')[0]}
                                  </h3>
                                  <p className={baseTextStyles}>{partner.split(':')[1]}</p>
                                </div>
                              ))}

                              {/* Mission Statement */}
                              <div
                                className={twMerge(
                                  clsx(
                                    'mt-8',
                                    'p-6',
                                    'dark:to-gray-750 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800',
                                    'rounded-lg',
                                    'shadow-sm',
                                    'text-gray-700 dark:text-gray-300',
                                    'text-lg',
                                    'leading-relaxed',
                                    'font-normal',
                                  ),
                                )}
                              >
                                {YOUTH_PROGRAM_DATA.missionStatement}
                              </div>
                            </div>

                            {/* Images Column */}
                            <div className='grid content-start gap-6'>
                              <FFTWImage
                                src={YouthPrograms}
                                alt='Youth Programs'
                                className={baseImageStyles}
                              />
                              <FFTWImage
                                src={YouthMassHire}
                                alt='MassHire Program'
                                className={baseImageStyles}
                              />
                            </div>
                          </dd>
                        }
                        otherwise={
                          <dd className={baseTextStyles}>
                            <ul
                              className={twMerge(
                                'grid gap-x-6 gap-y-2',
                                clsx({
                                  'grid-cols-1 md:grid-cols-2 lg:grid-cols-3':
                                    category.title === 'Foundations & Trusts',
                                  'grid-cols-1': category.title !== 'Foundations & Trusts',
                                }),
                              )}
                            >
                              {category.partners.map((partner: string) => (
                                <li key={partner} className='flex items-center gap-2'>
                                  <span className='h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400' />
                                  {partner}
                                </li>
                              ))}
                            </ul>
                          </dd>
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>

          {/* Special Thanks section remains the same */}
          <div className='mt-12 text-center'>
            <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100'>
              Special Thanks
            </h3>
            <ul className='mt-4 flex flex-wrap justify-center gap-x-8 gap-y-2 text-gray-600 desktop:text-2xl dark:text-gray-400'>
              <li>Joan O'Sullivan</li>
              <li>Stephanie and Adam Rogers</li>
              <li>State Representative Frank Moran</li>
            </ul>
          </div>
        </div>
      </div>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
