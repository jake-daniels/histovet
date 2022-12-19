import { StrictMode } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components'
import {
	AboutUsPage,
	ContactsPage,
	HomePage,
	NewsPage,
	PricingPage,
	RequestFormsPage,
	SamplesInfoPage,
} from './components/pages'

export function App() {
	return (
		<StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path={'/'} element={<AppLayout />}>
						<Route
							index={true}
							element={<HomePage />}
							// loader={async ({ params }) => {
							// 	return fetch(`/fake/api/teams/${params.teamId}.json`)
							// }}
							// action={async ({ request }) => {
							// 	return updateFakeTeam(await request.formData())
							// }}
							// errorElement={<ErrorBoundary />}
						/>
						<Route path={'about-us'} element={<AboutUsPage />} />
						<Route path={'pricing'} element={<PricingPage />} />
						<Route path={'contacts'} element={<ContactsPage />} />
						<Route path={'samples'} element={<SamplesInfoPage />} />
						<Route path={'request-forms'} element={<RequestFormsPage />} />
						<Route path={'news'} element={<NewsPage />} />
					</Route>
					<Route path={'*'} element={<Navigate to={'/'} />} />
				</Routes>
			</BrowserRouter>
		</StrictMode>
	)
}
