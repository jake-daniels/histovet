import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as LogoSlim } from '../../assets/logo-slim.svg'
import { Colors, HEADER_HEIGHT_SLIM } from '../../config'
import { Row } from './Flexbox'
import { Menu } from './Menu'
import { ResponsiveWrap } from './ResponsiveWrap'

export function HeaderMobile() {
	return (
		<Wrap>
			<ResponsiveWrap>
				<MainRow>
					<Link to={'/'}>
						<Logo />
					</Link>
					<Menu />
				</MainRow>
			</ResponsiveWrap>
		</Wrap>
	)
}

const Wrap = styled.header`
	z-index: 1;
	position: sticky;
	top: 0;
	height: ${HEADER_HEIGHT_SLIM}px;
	background: ${Colors.White};
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`
const MainRow = styled(Row)`
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 0;
`
const Logo = styled(LogoSlim)`
	position: absolute;
	top: 14px;
	left: 2rem;
	width: 180px;
	height: 180px;
`
