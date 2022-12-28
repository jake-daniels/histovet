export const News = {
	name: 'News',
	type: 'document',
	title: 'News',
	fields: [
		{
			name: 'items',
			title: 'Items',
			type: 'array',
			of: [{ type: 'NewsItem' }],
		},
	],
}

export const NewsItem = {
	name: 'NewsItem',
	title: 'NewsItem',
	type: 'object',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'date',
			title: 'Date',
			type: 'string',
		},
		{
			name: 'content',
			title: 'Content',
			type: 'text',
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
		},
	],
}
