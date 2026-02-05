import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		seo: {
			title: 'How Truth or Consequences Got Its Name | Gompa Apartments',
			description:
				'In 1949 the game show "Truth or Consequences" chose Hot Springs, NM to rename. Learn why the town became Truth or Consequences and its history of healing and hospitality.',
			path: '/torc',
		},
	};
};
