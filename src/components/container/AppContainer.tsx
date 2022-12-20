import { Outlet } from 'react-router-dom'
import { Col, Row } from '../lib'
import { Footer } from './Footer'
import { Header } from './Header'

export function AppContainer() {
	return (
		<Col $width={'100vw'} $minHeight={'100vh'} $align={'center'}>
			<Header />
			<Row $grow={1} $width={'100%'}>
				<Outlet />
			</Row>
			<Footer />
		</Col>
	)
}
