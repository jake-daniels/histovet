export interface CMS_Footer {
	content: string
}

export interface CMS_HomePage {
	image: string
}

export interface CMS_AboutUsPage {
	intro: string
	people: CMS_Person[]
}

export interface CMS_Person {
	name: string
	content: string
	image: string
}

export interface CMS_PricingPage {
	items: CMS_PricingItem[]
	note: string
	otherItems: CMS_PricingItem[]
}

export interface CMS_PricingItem {
	name: string
	price: string
}

export interface CMS_SamplesPage {
	requestFormFile: string
	manualFile: string
	address: string
	text2: string
	image: string
}

export interface CMS_ContactsPage {
	phoneNumbers: string[]
	emails: string[]
	address: string
	location: string
}

export interface CMS_NewsPage {
	items: CMS_NewsItem[]
}

export interface CMS_NewsItem {
	title: string
	date: string
	content: string
	image: string
}
