export const AboutUsPage = {
	name: 'AboutUsPage',
	type: 'document',
	title: 'About Us Page',
	fields: [
		{
			name: 'intro',
			title: 'Intro',
			type: 'text',
		},
		{
			name: 'people',
			title: 'People',
			type: 'array',
			of: [
				{
					name: 'Person',
					title: 'Person',
					type: 'Person',
				},
			],
		},
	],
}

export const Person = {
	name: 'Person',
	title: 'Person',
	type: 'object',
	fields: [
		{
			name: 'name',
			title: 'Name',
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
