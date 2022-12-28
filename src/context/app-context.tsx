import { createContext, ReactElement, useCallback, useContext, useEffect, useState } from 'react'
import { CMS_DATASET_ID, CMS_PROJECT_ID } from '../config'
import {
	CMS_AboutUsPage,
	CMS_ContactsPage,
	CMS_Footer,
	CMS_HomePage,
	CMS_NewsPage,
	CMS_PricingPage,
	CMS_SamplesPage,
} from '../types'

interface IAppContext {
	footer: CMS_Footer
	aboutUsPage: CMS_AboutUsPage
	homePage: CMS_HomePage
	pricing: CMS_PricingPage
	samples: CMS_SamplesPage
	contacts: CMS_ContactsPage
	news: CMS_NewsPage
}

const InitialContextValue = {} as IAppContext

const Context = createContext<IAppContext>(InitialContextValue)

export function AppContextProvider(props: { children: ReactElement }) {
	const { children } = props

	const [value, setValue] = useState<IAppContext>()

	const formatData = useCallback((result: any): IAppContext => {
		const data = {
			footer: result.find((x: any) => x._type === 'Footer'),
			homePage: result.find((x: any) => x._type === 'HomePage'),
			aboutUsPage: result.find((x: any) => x._type === 'AboutUsPage'),
			pricing: result.find((x: any) => x._type === 'Pricing'),
			samples: result.find((x: any) => x._type === 'Samples'),
			contacts: result.find((x: any) => x._type === 'Contacts'),
			news: result.find((x: any) => x._type === 'News'),
		}

		data.homePage.image = result.find((x: any) => x._id === data.homePage.image.asset._ref)?.url ?? ''

		data.aboutUsPage.people.forEach((person: any) => {
			person.image = result.find((x: any) => x._id === person.image.asset._ref)?.url ?? ''
		})

		data.samples.image = result.find((x: any) => x._id === data.samples.image.asset._ref)?.url ?? ''
		data.samples.file = result.find((x: any) => x._id === data.samples.requestForm.asset._ref)?.url ?? ''

		data.news.items.forEach((item: any) => {
			item.image = result.find((x: any) => x._id === item.image.asset._ref)?.url ?? ''
		})

		return data
	}, [])

	const fetchData = useCallback(async () => {
		try {
			const query = encodeURIComponent('*')

			const res = await fetch(
				`https://${CMS_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${CMS_DATASET_ID}?query=${query}`,
			)

			const response = await res.json()

			console.log(response)

			const data = formatData(response.result)

			setValue(data)
		} catch (error) {
			console.error('Failed to fetch CMS data.')
		}
	}, [formatData])

	useEffect(() => {
		fetchData()
	}, [fetchData])

	if (!value) {
		return null
	}

	return <Context.Provider value={value}>{children}</Context.Provider>
}

export function useAppContext() {
	const value = useContext(Context)
	return value
}
