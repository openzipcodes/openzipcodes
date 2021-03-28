import {init, cities} from './_posts';

export const get = async () => {
	await init()
	return {
		body: Object.keys(cities) .map(slug => ({
			slug,
			...cities[slug]
		}))
	};
}