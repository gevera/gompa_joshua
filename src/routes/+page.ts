import type { PageLoad } from './$types';
import { DEFAULT_META } from '$lib/seo';

export const load: PageLoad = () => {
	return {
		seo: {
			title: DEFAULT_META.title,
			description: DEFAULT_META.description,
			path: '/',
			ogImage: DEFAULT_META.ogImage,
		},
	};
};
