import { ReactNode } from 'react'
import styled from 'styled-components'
import { SCREEN_BREAKPOINTS_PX } from '../../config'

export function ResponsiveWrap(props: { children: ReactNode }) {
	return <Wrap>{props.children}</Wrap>
}

const SIDE_PADDING = '2rem'
const SCROLLBAR_WIDTH = '1rem'

const Wrap = styled.div`
	display: flex;
	padding: 0 ${SIDE_PADDING};

	@media screen and (min-width: 0) {
		width: calc(${SCREEN_BREAKPOINTS_PX.XS} - ${SIDE_PADDING} * 2 - ${SCROLLBAR_WIDTH});
	}
	@media screen and (min-width: ${SCREEN_BREAKPOINTS_PX.SM}) {
		width: calc(${SCREEN_BREAKPOINTS_PX.SM} - ${SIDE_PADDING} * 2 - ${SCROLLBAR_WIDTH});
	}
	@media screen and (min-width: ${SCREEN_BREAKPOINTS_PX.MD}) {
		width: calc(${SCREEN_BREAKPOINTS_PX.MD} - ${SIDE_PADDING} * 2 - ${SCROLLBAR_WIDTH});
	}
	@media screen and (min-width: ${SCREEN_BREAKPOINTS_PX.LG}) {
		width: calc(${SCREEN_BREAKPOINTS_PX.LG} - ${SIDE_PADDING} * 2 - ${SCROLLBAR_WIDTH});
	}
`
