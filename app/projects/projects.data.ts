export interface ProjectSummary {
	id: string;
	title: string;
	description: string;
	href: string;
	frontImage: string;
	backImage: string;
	isExternal?: boolean;
}

export const projectSummaries: ProjectSummary[] = [
	{
		id: 'customizable-components',
		title: 'Customizable Components',
		description:
			'Interactive, modular design tools used within an online presentation platform.',
		href: '/projects/custom-comps',
		frontImage: '/images/featured-components.png',
		backImage: '/images/featured-components.png',
	},
	{
		id: 'website-designs',
		title: 'Website Designs',
		description:
			'Design, development, and ongoing maintenance of numerous websites.',
		href: '/projects/web-designs',
		frontImage: '/images/screens-hailey-sault.png',
		backImage: '/images/desktop-hailey-sault.png',
	},
	{
		id: 'interactive-presentations',
		title: 'Interactive Presentations',
		description:
			'Fully interactive presentations built with JavaScript, HTML, CSS, jQuery, and Bootstrap.',
		href: '/projects/interactive-presentations',
		frontImage: '/images/bahrain-menu.jpg',
		backImage: '/images/bahrain-menu.jpg',
	},
	// {
	// 	id: 'rebuild-rocky-fork-road',
	// 	title: 'Rebuild Rocky Fork Road',
	// 	description:
	// 		'Website created to raise community awareness and support for recovery efforts after Hurricane Helene.',
	// 	href: 'https://rebuildrockyforkroad.org/',
	// 	frontImage: '/images/rockyfork.jpeg',
	// 	backImage: '/images/rockyfork-map.png',
	// 	isExternal: true,
	// },
	{
		id: 'give-with-every-purchase',
		title: 'Give with Every Purchase',
		description:
			'Website created to give a portion of every sale to nonprofits and artists with every purchase.',
		href: 'https://www.givewitheverypurchase.com/',
		frontImage: '/images/give-with-every-purchase-shirts.png',
		backImage: '/images/give-with-every-purchase-home.png',
		isExternal: true,
	},
];
