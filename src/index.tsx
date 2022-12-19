import { createRoot } from 'react-dom/client'
import { ReportHandler } from 'web-vitals'
import { App } from './App'

import './index.css'
import './normalize.css'

main()

function main() {
	renderApp()
	reportWebVitals(console.log)
}

function renderApp() {
	const rootElement = document.getElementById('root')
	if (!rootElement) {
		throw new Error('Cannot get app root element.')
	}
	const root = createRoot(rootElement)
	root.render(<App />)
}

function reportWebVitals(onPerfEntry?: ReportHandler) {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
			getCLS(onPerfEntry)
			getFID(onPerfEntry)
			getFCP(onPerfEntry)
			getLCP(onPerfEntry)
			getTTFB(onPerfEntry)
		})
	}
}
