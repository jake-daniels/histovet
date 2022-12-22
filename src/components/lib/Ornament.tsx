import { CSSProperties } from 'react'
import styled from 'styled-components'
import { ReactComponent as OrnamentSvg } from '../../assets/ornament.svg'
import { ReactComponent as BubbleSvg } from '../../assets/bubble.svg'

interface IProps {
	$top?: CSSProperties['top']
	$bottom?: CSSProperties['bottom']
	$left?: CSSProperties['left']
	$right?: CSSProperties['right']
}

export const RightOrnament = styled(OrnamentSvg)<IProps>`
	pointer-events: none;
	z-index: -1;
	position: absolute;
	top: ${({ $top }) => $top};
	bottom: ${({ $bottom }) => $bottom};
	left: ${({ $left }) => $left};
	right: ${({ $right }) => $right};
`
export const LeftOrnament = styled(RightOrnament)<IProps>`
	transform: scaleX(-1);
`

export const LeftBubble = styled(BubbleSvg)<IProps>`
	pointer-events: none;
	z-index: -1;
	position: absolute;
	top: ${({ $top }) => $top};
	bottom: ${({ $bottom }) => $bottom};
	left: ${({ $left }) => $left};
	right: ${({ $right }) => $right};
`
export const RightBubble = styled(LeftBubble)`
	transform: scaleX(-1);
`
export const RightTopBubble = styled(LeftBubble)`
	transform: scale(-1, -1);
`
