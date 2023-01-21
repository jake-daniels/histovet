import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppContainer } from './components/container'
import { AboutUsPage, ContactsPage, HomePage, NewsPage, PricingPage, SamplesInfoPage } from './components/pages'
import { AppContextProvider } from './context'

export function App() {
	return (
		<AppContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path={'/'} element={<AppContainer />}>
						<Route index={true} element={<HomePage />} />
						<Route path={'about-us'} element={<AboutUsPage />} />
						<Route path={'pricing'} element={<PricingPage />} />
						<Route path={'contacts'} element={<ContactsPage />} />
						<Route path={'samples'} element={<SamplesInfoPage />} />
						<Route path={'news'} element={<NewsPage />} />
					</Route>
					<Route path={'*'} element={<Navigate to={'/'} />} />
				</Routes>
			</BrowserRouter>
		</AppContextProvider>
	)
}
