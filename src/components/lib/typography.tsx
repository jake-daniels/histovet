import styled from 'styled-components'
import { Colors } from '../../config'
import { Link as RouterLink } from 'react-router-dom'

type TextColor = 'white' | 'black' | 'orange'

const ColorMap: Record<TextColor, string> = {
	white: Colors.White,
	black: Colors.Black,
	orange: Colors.Orange,
}

export const Text = styled.span<{ color?: TextColor }>`
	font-weight: 500;
	color: ${({ color }) => ColorMap[color ?? 'black']};
`
export const Headline = styled.h3<{ color?: TextColor }>`
	font-weight: 500;
	color: ${({ color }) => ColorMap[color ?? 'black']};
`
export const Link = styled(RouterLink)<{ color?: TextColor }>`
	font-weight: 500;
	color: ${({ color }) => ColorMap[color ?? 'black']};
	text-decoration: underline;
	&:hover {
		color: ${Colors.Orange};
		text-decoration-color: ${Colors.Orange};
	}
`