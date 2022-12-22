import { NavLink as RouterNavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Colors, SCREEN_BREAKPOINTS } from '../../config'
import { Text } from './Typography'

export const NavLink = styled(RouterNavLink)`
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
	@media screen and (max-width: ${SCREEN_BREAKPOINTS.SM - 1}px) {
		padding: 0.25rem 0.5rem;
	}
`
