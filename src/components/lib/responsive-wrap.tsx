import { ReactNode } from 'react'
import styled from 'styled-components'

export function ResponsiveWrap(props: { children: ReactNode }) {
	return <Wrap>{props.children}</Wrap>
}

const Wrap = styled.div`
	display: flex;
	width: 1200px;
	padding: 0 1rem;
	/* @media screen and (max-width: 780px) {
		.full-width-img {
			margin: auto;
			width: 90%;
		}
	} */
`

const Breakpoints = {
	xs: 320,
	sm: 768,
	md: 1200,
	lg: 1920,
	xl: 2560,
}
