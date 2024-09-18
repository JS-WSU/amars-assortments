import CATEGORIES from '$lib/constants/CATEGORIES';
import { loopThroughObjRecurse } from '$lib/utils';
import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	const foodItems: Record<'food', string>[] = [];
	loopThroughObjRecurse(CATEGORIES, (c) => {
		foodItems.push({ food: c });
	});
	return foodItems;
};

export const prerender = true;
