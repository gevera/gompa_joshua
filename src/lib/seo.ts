/** Canonical site URL (no trailing slash). Used for canonical links, OG URLs, sitemap. */
export const SITE_URL = 'https://gompaapts.com';

export const DEFAULT_META = {
	title: 'Gompa Apartments | Rentals & Retreats in Truth or Consequences, NM',
	description:
		'Gompa Apartments in Truth or Consequences, New Mexico — apartments for spiritual retreats, meditation, and vacation. Near hot springs and Elephant Butte Lake. A peaceful place to get away.',
	ogImage: `${SITE_URL}/pics/aerial.jpg`,
	keywords:
		'apartments Truth or Consequences, rentals T or C NM, retreat rentals New Mexico, meditation retreat, hot springs Truth or Consequences, Elephant Butte Lake, Gompa Apartments',
} as const;

export type SeoData = {
	title: string;
	description: string;
	/** Path only (e.g. "/" or "/torc"). Canonical URL will be SITE_URL + path */
	path?: string;
	/** Override OG image for this page (full URL) */
	ogImage?: string;
};
