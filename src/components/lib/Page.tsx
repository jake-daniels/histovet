import { ReactNode } from 'react'
import styled from 'styled-components'
import { Colors } from '../../config'
import { ResponsiveWrap } from './ResponsiveWrap'

export function Page(props: { children: ReactNode; className?: string }) {
	const { children, className } = props
	return (
		<Wrap className={className}>
			<ResponsiveWrap>{children}</ResponsiveWrap>
		</Wrap>
	)
}

const Wrap = styled.section`
	position: relative;
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 4rem 0;
	background: ${Colors.Beige};
`
