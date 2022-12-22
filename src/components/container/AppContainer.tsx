import { Outlet } from 'react-router-dom'
import { useIsMobile } from '../../hooks'
import { Col, Footer, Header, HeaderMobile, Row } from '../lib'

export function AppContainer() {
	const isMobile = useIsMobile()

	return (
		<Col $position={'relative'} $width={'100vw'} $maxWidth={'100%'} $minHeight={'100vh'} $align={'center'}>
			{isMobile ? <HeaderMobile /> : <Header />}
			<Row $grow={1} $width={'100%'}>
				<Outlet />
			</Row>
			<Footer />
		</Col>
	)
}
