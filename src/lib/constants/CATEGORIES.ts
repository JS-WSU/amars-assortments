// export default [
// 	{
// 		name: 'Meat',
// 		subCategories: [
// 			{
// 				name: 'Chicken',
// 				subCategories: [
// 					{ name: 'Chicken Sandwich' },
// 					{ name: 'Chicken Tikka Masala' },
// 					{ name: 'Butter Chicken' },
// 					{ name: 'Chicken Burrito' }
// 				]
// 			},
// 			{ name: 'Goat Meat' },
// 			{ name: 'Lamb' }
// 		]
// 	},
// 	{
// 		name: 'Sweets',
// 		subCategories: [{ name: 'Gulabjamun', subCategories: [] }, { name: 'Jalebi' }, { name: '' }]
// 	},
// 	{ name: 'Dairy', subCategories: [{ name: 'Other', subCategories: [] }] },
// 	{ name: 'Beans, Legumes, & Rice', subCategories: [{ name: 'Other', subCategories: [] }] },
// 	{ name: 'Fruits and Veggies', subCategories: [{ name: 'Other', subCategories: [] }] },
// 	{ name: 'Other', subCategories: [{ name: 'Other', subCategories: [] }] }
// ];

export default {
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
		},
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
