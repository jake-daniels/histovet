import { Link, NavLink as RouterNavLink } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as HomeIcon } from '../../assets/home-icon.svg'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { Colors } from '../../config'
import { ResponsiveWrap, Row, Text } from '../lib'

interface IProps {}

export function Header(props: IProps) {
	const {} = props

	return (
		<header>
			<ResponsiveWrap>
				<Row $width={'100%'} $align={'flex-end'} $justify={'space-between'} $padding={'2rem 0 1rem 0'}>
					<Link to={'/'}>
						<Logo width={128} height={128} />
					</Link>
					<Navigation>
						<NavLink to={'/'}>
							<HomeIcon width={20} height={20} />
						</NavLink>
						<NavLink to={'about-us'}>
							<Text>Kdo jsme</Text>
						</NavLink>
						<NavLink to={'pricing'}>
							<Text>Ceník</Text>
						</NavLink>
						<NavLink to={'contacts'}>
							<Text>Kontakty</Text>
						</NavLink>
						<NavLink to={'samples'}>
							<Text>Zasílání vzorků</Text>
						</NavLink>
						<NavLink to={'request-forms'}>
							<Text>Žádanky</Text>
						</NavLink>
						<NavLink to={'news'}>
							<Text>Aktuality</Text>
						</NavLink>
					</Navigation>
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
	&:hover {
		border-color: ${Colors.Orange};
	}
	&.active {
		color: ${Colors.Orange};
		${Text} {
			color: ${Colors.Orange};
		}
	}
`
