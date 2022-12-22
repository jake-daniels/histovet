import { Outlet } from 'react-router-dom'
import { useIsMobile, useWindowSize } from '../../hooks'
import { Col, Footer, Header, HeaderMobile, Row } from '../lib'

export function AppContainer() {
	const windowSize = useWindowSize()
	const isMobile = useIsMobile()

	return (
		<Col $position={'relative'} $width={'100vw'} $maxWidth={'100%'} $minHeight={'100vh'} $align={'center'}>
			<div style={{ position: 'absolute', top: 0, left: 0 }}>
				{windowSize.width} x {windowSize.height}
			</div>
			{isMobile ? <HeaderMobile /> : <Header />}
			<Row $grow={1} $width={'100%'}>
				<Outlet />
			</Row>
			<Footer />
		</Col>
	)
}
