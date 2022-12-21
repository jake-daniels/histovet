import { CSSProperties } from 'react'
import styled, { css } from 'styled-components'

interface Props {
	$position?: CSSProperties['position']
	$display?: CSSProperties['display']
	$width?: CSSProperties['width']
	$height?: CSSProperties['height']
	$minWidth?: CSSProperties['minWidth']
	$minHeight?: CSSProperties['minHeight']
	$maxWidth?: CSSProperties['maxWidth']
	$maxHeight?: CSSProperties['maxHeight']
	$padding?: CSSProperties['padding']
	$margin?: CSSProperties['margin']
	$gap?: CSSProperties['gap']
	$align?: CSSProperties['alignItems']
	$justify?: CSSProperties['justifyContent']
	$grow?: CSSProperties['flexGrow']
	$direction?: CSSProperties['flexDirection']
}

const FlexboxProps = css<Props>`
	display: ${({ $display }) => $display ?? 'flex'};
	position: ${({ $position }) => $position};
	width: ${({ $width }) => $width};
	height: ${({ $height }) => $height};
	min-width: ${({ $minWidth }) => $minWidth};
	min-height: ${({ $minHeight }) => $minHeight};
	max-width: ${({ $maxWidth }) => $maxWidth};
	max-height: ${({ $maxHeight }) => $maxHeight};
	padding: ${({ $padding }) => $padding};
	margin: ${({ $margin }) => $margin};
	gap: ${({ $gap }) => $gap};
	align-items: ${({ $align }) => $align};
	justify-content: ${({ $justify }) => $justify};
	flex-grow: ${({ $grow }) => $grow};
	flex-direction: ${({ $direction }) => $direction};
`

export const Flex = styled.div<Props>`
	${FlexboxProps};
`
export const Row = styled(Flex)<Props>`
	flex-direction: row;
`
export const Col = styled(Flex)<Props>`
	flex-direction: column;
`
