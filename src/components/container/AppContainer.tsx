import { Outlet } from 'react-router-dom'
import { useWindowSize } from '../../hooks'
import { Col, Row } from '../lib'
import { Footer } from './Footer'
import { Header } from './Header'

export function AppContainer() {
	const windowSize = useWindowSize()

	return (
		<Col $position={'relative'} $width={'100vw'} $maxWidth={'100%'} $minHeight={'100vh'} $align={'center'}>
			<div style={{ position: 'absolute', top: 0, left: 0 }}>
				{windowSize.width} x {windowSize.height}
			</div>
			<Header />
			<Row $grow={1} $width={'100%'}>
				<Outlet />
			</Row>
			<Footer />
		</Col>
	)
}
