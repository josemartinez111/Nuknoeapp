// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
// COMPONENTS > PAGES > HOME_PAGE_SECTIONS > PARTNERS >
// COMPOSABLES-HOOKS >> USE_PARTNERS.TS
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import clsx from 'clsx';
import {
	Building,
	Building2,
	Church,
	GraduationCap,
	HeartHandshake,
	LucideIcon,
	School,
	Store,
} from 'lucide-react';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export type PartnerCategoryType = {
	title: string;
	icon: LucideIcon;
	partners: string[];
};

export type YouthProgramType = {
	title: string;
	icon: LucideIcon;
	partners: string[];
	missionStatement: string;
};
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const usePartners = () => {
	const PARTNER_CATEGORIES: Array<PartnerCategoryType> = [
		{
			title: 'Food For The World Youth Engagement Programs',
			icon: School,
			partners: [
				` L.Y.S.O.A. Partnership: We collaborate with the Lynn Youth Street
        Outreach Advocacy (L.Y.S.O.A.) to provide opportunities for youth aged 13
        to 18 to fulfill their community service hours throughout the year`,
				`MassHire Summer Youth Program: Each summer, we partner with MassHire Merrimack
        Valley Career Center to engage youth aged 15 to 19 in our main food pantry
        distribution site. This program provides hands-on work experience during the summer months`,
				`Previous Partners: Our past collaborations have included impactful organizations such as UTEC and
        SISU, furthering our reach and enhancing the services we offer to the youth in our community.`,
				`Through these partnerships, we strive to offer mentorship, job training, and essential skill's
        development. Together, we create a nurturing environment where youth can grow personally and
        professionally while making a meaningful impact in their community.`,
			],
		},
		{
			title: 'Foundations & Trusts',
			icon: Building2,
			partners: [
				'Josephine G. Rusell Trust',
				'Nathaniel and Elizabeth Stevens Foundation',
				'Horne Family Foundation',
				'The Ludcke Foundation',
				'The Charles G. Pringle Foundation',
				'The Artemas W. Stearns Trust',
				'The Forest Foundation',
				'The Charlotte Foundation',
				'The Clipper Ship Foundation',
				'Louis S. Cox Trust (Bank of America)',
				'Moses Kimball Fund',
				'Mifflin Memorial Fund',
				'Agnes M. Lindsay Trust',
				'The Paul & Philis Fireman Charitable Foundation',
				'Ash Charitable Corporation, Inc',
				"People's United Community Foundation",
				'Darden Foundation',
				'The Essex County Community Foundation',
			],
		},
		{
			title: 'Healthcare Organizations',
			icon: HeartHandshake,
			partners: [
				'The Fallon Community Health Plan',
				'Neighborhood Health Plan',
				'Blue Cross Blue Shield of Mass Foundation Inc.',
				'Boston Medical Center Healthnet Plan',
				'Tufts Health Plan',
				'Molina Healthcare, Inc',
				'United Health Care',
			],
		},
		{
			title: 'Community & Government',
			icon: Building,
			partners: [
				'Greater Boston Food Bank (USDA-MEFAP)',
				'The Massachusetts Housing and Development Authority',
				'City of Lawrence CDBG',
				'Project Bread',
				'Latino CEED REACH New England',
				'Merrimack Valley Central Labor Council',
			],
		},
		{
			title: 'Educational & Service Centers',
			icon: GraduationCap,
			partners: [
				"L' Davinci Child Center",
				'Beth Israel Senior Citizens Housing, Inc (Van Donation)',
				'Jericho Road',
				'Day Dreaming Organization',
			],
		},
		{
			title: 'Religious Organizations',
			icon: Church,
			partners: ['Ira Iglesia Metodista Libre Hispana'],
		},
		{
			title: 'Corporate Partners',
			icon: Store,
			partners: [
				'New England Bio-Labs Inc.',
				'General Mills',
				'Eastern Bank Foundation',
				'Walmart Foundation',
				'P&G The Greater Cincinnati Foundation',
				'Hannaford Supermarkets',
				'Stop & Shop Supermarket Company',
				'Pollo Centro',
				'Amazon',
			],
		},
	];
	
	const YOUTH_PROGRAM_DATA: YouthProgramType = {
		title: 'Food For The World Youth Engagement Programs',
		icon: School,
		partners: [
			` L.Y.S.O.A. Partnership: We collaborate with the Lynn Youth Street
    Outreach Advocacy (L.Y.S.O.A.) to provide opportunities for youth aged 13
    to 18 to fulfill their community service hours throughout the year`,
			`MassHire Summer Youth Program: Each summer, we partner with MassHire Merrimack
    Valley Career Center to engage youth aged 15 to 19 in our main food pantry
    distribution site. This program provides hands-on work experience during the summer months`,
			`Previous Partners: Our past collaborations have included impactful organizations such as UTEC and
    SISU, furthering our reach and enhancing the services we offer to the youth in our community.`,
		],
		missionStatement: `Through these partnerships, we strive to offer mentorship, job training, and essential skill's
    development. Together, we create a nurturing environment where youth can grow personally and
    professionally while making a meaningful impact in their community.`,
	};
	
	// Base styles as constants
	const baseCardStyles = clsx('rounded-lg', 'bg-gray-50 dark:bg-gray-800', 'p-6', 'shadow-sm');
	
	const baseTextStyles = clsx('text-gray-600 dark:text-gray-400', 'leading-relaxed');
	
	const baseHeadingStyles = clsx('font-semibold', 'text-gray-900 dark:text-gray-100');
	
	const baseImageStyles = clsx(
		'w-full',
		'h-auto', // Let height adjust based on content
		'max-h-[450px]', // Maximum height on any screen
		'tablet:max-h-[500px]',
		'laptop:max-h-[550px]',
		'desktop:max-h-[600px]',
		'rounded-lg',
		'object-contain', // Changed from cover to contain to show full flyer
		'shadow-lg',
	);
	
	return {
		PARTNER_CATEGORIES,
		YOUTH_PROGRAM_DATA,
		baseCardStyles,
		baseTextStyles,
		baseHeadingStyles,
		baseImageStyles,
	};
};
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
