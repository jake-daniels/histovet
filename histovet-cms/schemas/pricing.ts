export const Pricing = {
	name: 'Pricing',
	type: 'document',
	title: 'Pricing',
	fields: [
		{
			name: 'items',
			title: 'Items',
			type: 'array',
			of: [{ type: 'PricingItem' }],
		},
		{
			name: 'otherItems',
			title: 'Other Items',
			type: 'array',
			of: [{ type: 'PricingItem' }],
		},
	],
}

export const PricingItem = {
	name: 'PricingItem',
	title: 'PricingItem',
	type: 'object',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'price',
			title: 'Price',
			type: 'string',
		},
	],
}
