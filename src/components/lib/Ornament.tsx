import { CSSProperties } from 'react'
import styled from 'styled-components'
import { ReactComponent as SvgImage } from '../../assets/home-page-ornament.svg'

interface IProps {
	$top?: CSSProperties['top']
	$bottom?: CSSProperties['bottom']
	$left?: CSSProperties['left']
	$right?: CSSProperties['right']
}

const Ornament = styled(SvgImage)<IProps>`
	z-index: -1;
	position: absolute;
	top: ${({ $top }) => $top};
	bottom: ${({ $bottom }) => $bottom};
	left: ${({ $left }) => $left};
	right: ${({ $right }) => $right};
`
export const LeftOrnament = styled(Ornament)<IProps>`
	transform: scaleX(-1);
`
export const RightOrnament = styled(Ornament)<IProps>``
