import { useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { ReactComponent as HomeIcon } from '../../assets/home-icon.svg'
import { ReactComponent as LogoSlim } from '../../assets/logo-slim.svg'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { Colors, HEADER_HEIGHT_NORMAL, HEADER_HEIGHT_SLIM, SCREEN_BREAKPOINTS } from '../../config'
import { Row } from './Flexbox'
import { NavLink } from './NavLink'
import { ResponsiveWrap } from './ResponsiveWrap'

const SCROLL_THRESHOLD = HEADER_HEIGHT_NORMAL - HEADER_HEIGHT_SLIM

export function Header() {
	const [isSticky, setSticky] = useState(false)

	useLayoutEffect(() => {
		const handleScroll = () => {
			setSticky(window.scrollY > SCROLL_THRESHOLD)
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<Wrap $isSticky={isSticky}>
			<ResponsiveWrap>
				<MainRow $align={'flex-end'} $isSticky={isSticky}>
					<Link to={'/'}>{isSticky ? <StyledLogoSlim /> : <StyledLogo />}</Link>
					<Navigation>
						<NavLink to={'/'}>
							<HomeIcon width={20} height={20} />
						</NavLink>
						<NavLink to={'about-us'}>
							<span>Kdo jsme</span>
						</NavLink>
						<NavLink to={'pricing'}>
							<span>Ceník</span>
						</NavLink>
						<NavLink to={'contacts'}>
							<span>Kontakty</span>
						</NavLink>
						<NavLink to={'samples'}>
							<span>Zasílání vzorků</span>
						</NavLink>
						<NavLink to={'request-forms'}>
							<span>Žádanky</span>
						</NavLink>
						<NavLink to={'news'}>
							<span>Aktuality</span>
						</NavLink>
					</Navigation>
				</MainRow>
			</ResponsiveWrap>
		</Wrap>
	)
}

const Wrap = styled.header<{ $isSticky?: boolean }>`
	height: ${HEADER_HEIGHT_NORMAL}px;
	background: ${Colors.White};
	${({ $isSticky }) =>
		$isSticky &&
		css`
			z-index: 1;
			position: sticky;
			top: -${SCROLL_THRESHOLD}px;
			box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
		`}
`

const StyledLogo = styled(Logo)`
	width: 128px;
	height: 128px;
`
const StyledLogoSlim = styled(LogoSlim)`
	position: absolute;
	top: 10px;
	width: 200px;
	height: 200px;
	@media screen and (max-width: ${SCREEN_BREAKPOINTS.SM - 1}px) {
		display: none;
	}
`
const MainRow = styled(Row)<{ $isSticky?: boolean }>`
	width: 100%;
	justify-content: space-between;
	padding: 1rem 0;
	${({ $isSticky }) =>
		$isSticky &&
		css`
			position: relative;
			top: 52px;
		`}
`
const Navigation = styled.nav`
	display: flex;
`
