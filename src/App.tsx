import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { AppContainer } from './components/container'
import { Row } from './components/lib'
import { AboutUsPage, ContactsPage, HomePage, NewsPage, PricingPage, SamplesInfoPage } from './components/pages'
import { AppContextProvider } from './context'

export function App() {
	const [showApp, setShowApp] = useState(false)
	const [password, setPassword] = useState('')

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.code === 'Enter') {
				if (password === 'delam_stojky') {
					setShowApp(true)
				}
			}
		}
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [password])

	if (!showApp) {
		return (
			<Row $width={'100%'} $height={'100vh'} $align={'center'} $justify={'center'}>
				<Input placeholder={'Password?'} value={password} onChange={(e) => setPassword(e.target.value)} />
			</Row>
		)
	}

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

const Input = styled.input`
	width: 20rem;
	padding: 1rem;
	border: 2px solid #d3d3d3;
	border-radius: 0.5rem;
`
