import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as HomeIcon } from '../../assets/home-icon.svg'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { SCREEN_BREAKPOINTS } from '../../config'
import { useIsMobile } from '../../hooks'
import { ResponsiveWrap, Row } from '../lib'
import { Menu } from './Menu'
import { NavLink } from './NavLink'

export function Header() {
	const isMobile = useIsMobile()

	if (isMobile) {
		return (
			<header>
				<ResponsiveWrap>
					<Wrap $align={'center'}>
						<Link to={'/'}>
							<StyledLogo />
						</Link>
						{isMobile && <Menu />}
					</Wrap>
				</ResponsiveWrap>
			</header>
		)
	}

	return (
		<header>
			<ResponsiveWrap>
				<Wrap $align={'flex-end'}>
					<Link to={'/'}>
						<StyledLogo />
					</Link>
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
				</Wrap>
			</ResponsiveWrap>
		</header>
	)
}

const StyledLogo = styled(Logo)`
	width: 128px;
	height: 128px;
`
const Wrap = styled(Row)`
	width: 100%;
	justify-content: space-between;
	padding: 2rem 0 1rem 0;
	@media screen and (max-width: ${SCREEN_BREAKPOINTS.SM - 1}px) {
		${StyledLogo} {
			width: 92px;
			height: 92px;
		}
	}
`
const Navigation = styled.nav`
	display: flex;
`
