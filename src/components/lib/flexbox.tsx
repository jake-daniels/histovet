import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
	$position?: React.CSSProperties['position']
	$display?: React.CSSProperties['display']
	$width?: React.CSSProperties['width']
	$height?: React.CSSProperties['height']
	$minWidth?: React.CSSProperties['minWidth']
	$minHeight?: React.CSSProperties['minHeight']
	$maxWidth?: React.CSSProperties['maxWidth']
	$maxHeight?: React.CSSProperties['maxHeight']
	$padding?: React.CSSProperties['padding']
	$margin?: React.CSSProperties['margin']
	$gap?: React.CSSProperties['gap']
	$align?: React.CSSProperties['alignItems']
	$justify?: React.CSSProperties['justifyContent']
	$grow?: React.CSSProperties['flexGrow']
	$direction?: React.CSSProperties['flexDirection']
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
