import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
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
}

const FlexboxProps = css<Props>`
	display: flex;
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
`

export const Row = styled.div<Props>`
	${FlexboxProps};
	flex-direction: row;
`
export const Col = styled.div<Props>`
	${FlexboxProps};
	flex-direction: column;
`
