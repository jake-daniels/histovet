export const Contacts = {
	name: 'Contacts',
	type: 'document',
	title: 'Contacts',
	fields: [
		{
			name: 'phoneNumbers',
			title: 'Phone Numbers',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			name: 'emails',
			title: 'Emails',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			name: 'address',
			title: 'Address',
			type: 'text',
		},
		{
			name: 'location',
			title: 'Google Maps Location',
			type: 'string',
		},
	],
}
