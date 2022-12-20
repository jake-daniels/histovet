import { FaBars } from 'react-icons/fa'
import { Link, NavLink as RouterNavLink } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as HomeIcon } from '../../assets/home-icon.svg'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { Colors, SCREEN_BREAKPOINTS_PX } from '../../config'
import { useIsMobile } from '../../hooks'
import { ResponsiveWrap, Row, Text } from '../lib'

export function Header() {
	const isMobile = useIsMobile()

	return (
		<header>
			<ResponsiveWrap>
				<Row
					$width={'100%'}
					$align={isMobile ? 'center' : 'flex-end'}
					$justify={'space-between'}
					$padding={'2rem 0 1rem 0'}
				>
					<Link to={'/'}>
						<Logo width={128} height={128} />
					</Link>
					{isMobile && <FaBars size={48} />}
					{!isMobile && (
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
					)}
				</Row>
			</ResponsiveWrap>
		</header>
	)
}

const Navigation = styled.nav`
	display: flex;
`
const NavLink = styled(RouterNavLink)`
	display: flex;
	align-items: flex-end;
	padding: 0.25rem 1rem;
	border-bottom: 2px solid transparent;
	text-decoration: none;
	color: ${Colors.Black};
	font-weight: 500;
	white-space: nowrap;
	&:hover {
		border-color: ${Colors.Orange};
	}
	&.active {
		color: ${Colors.Orange};
		${Text} {
			color: ${Colors.Orange};
		}
	}
	@media screen and (max-width: ${SCREEN_BREAKPOINTS_PX.SM}) {
		padding: 0.25rem 0.5rem;
	}
`
