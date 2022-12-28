import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
	name: 'default',
	title: 'histovet-cms',

	projectId: 'v4o6sd1t',
	dataset: 'production',

	plugins: [deskTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
})
