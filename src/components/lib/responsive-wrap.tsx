import { ReactNode } from 'react'
import styled from 'styled-components'
import { SCREEN_BREAKPOINTS } from '../../config'

export function ResponsiveWrap(props: { children: ReactNode }) {
	return <Wrap>{props.children}</Wrap>
}

const SIDE_PADDING = '2rem'
const SCROLLBAR_WIDTH = '1rem'

const Wrap = styled.div`
	display: flex;
	padding: 0 ${SIDE_PADDING};

	@media screen and (min-width: 0) {
		width: 100%;
	}
	@media screen and (min-width: ${SCREEN_BREAKPOINTS.XS}px) {
		width: calc(${SCREEN_BREAKPOINTS.XS}px - ${SIDE_PADDING} * 2 - ${SCROLLBAR_WIDTH});
	}
	@media screen and (min-width: ${SCREEN_BREAKPOINTS.SM}px) {
		width: calc(${SCREEN_BREAKPOINTS.SM}px - ${SIDE_PADDING} * 2 - ${SCROLLBAR_WIDTH});
	}
	@media screen and (min-width: ${SCREEN_BREAKPOINTS.MD}px) {
		width: calc(${SCREEN_BREAKPOINTS.MD}px - ${SIDE_PADDING} * 2 - ${SCROLLBAR_WIDTH});
	}
	@media screen and (min-width: ${SCREEN_BREAKPOINTS.LG}px) {
		width: calc(${SCREEN_BREAKPOINTS.LG}px - ${SIDE_PADDING} * 2 - ${SCROLLBAR_WIDTH});
	}
`
