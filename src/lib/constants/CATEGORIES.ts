import type { Categories } from '$lib/types';

const CATEGORIES: Categories = {
	Meat: {
		'Goat Meat': {},
		Lamb: {},
		Chicken: {
			'Chicken Sandwich': {},
			'Chicken Tikka Masala': {},
			'Butter Chicken': {},
			'Chicken Burrito': {},
			'Hotdog Chicken': {}
		},
		Turkey: {}
	},
	Sweets: {
		Gulabjamun: {},
		Jalebi: {},
		Laddo: {},
		Pie: {
			'Apple Pie': {},
			'Peach Pie': {}
		}
	},
	Dairy: {
		'Mango Lassi': {},
		Milkshake: {},

		'Dahi (Yogurt)': {}
	},
	'Beans, Legumes, & Rice': {
		'Kidney Beans': {},
		'Brown Rice': {},
		'Saag Paneer': {},
		Dal: {}
	},
	'Fruits & Veggies': {
		'Salad Bowl Mix': {},
		Cherries: {},
		Watermelon: {},
		'Fruit Smoothie': {
			'Berry Blast': {},
			'Orange & Mango': {}
		}
	},
	Bread: {
		'Garlic Bread Naan': {},
		'Aloo (Potato) Parantha': {},
		'Methi Paratha': {}
	},
	Snacks: {
		'Banana Muffin': {},
		'Hash browns': {}
	}
};

export default CATEGORIES;
