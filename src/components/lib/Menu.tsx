import { useEffect, useRef, useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { FaBars } from 'react-icons/fa'
import styled, { css } from 'styled-components'
import { Colors, HEADER_HEIGHT_SLIM } from '../../config'
import { Col, Row } from './Flexbox'
import { NavLink } from './NavLink'

export function Menu() {
	const listRef = useRef<HTMLDivElement>(null)

	const [isMenuOpen, setMenuOpen] = useState(false)
	const [isMenuVisible, setMenuVisible] = useState(false)

	useEffect(() => {
		setMenuVisible(isMenuOpen)
	}, [isMenuOpen])

	useEffect(() => {
		if (!isMenuVisible) {
			window.setTimeout(() => setMenuOpen(false), 250)
		}
	}, [isMenuVisible])

	useEffect(() => {
		if (!listRef.current) {
			return
		}
		if (isMenuVisible) {
			listRef.current.style.maxHeight = `${listRef.current.scrollHeight}px`
		} else {
			listRef.current.style.maxHeight = '0px'
		}
	}, [isMenuVisible])

	return (
		<MenuWrap>
			{!isMenuOpen && <IconOpen size={40} onClick={() => setMenuOpen(true)} />}
			{isMenuOpen && <IconClose size={54} onClick={() => setMenuVisible(false)} />}
			{isMenuOpen && (
				<List ref={listRef} onClick={() => setMenuOpen(false)}>
					<MenuNavLink to={'/'}>
						<span>Domů</span>
					</MenuNavLink>
					<MenuNavLink to={'about-us'}>
						<span>Kdo jsme</span>
					</MenuNavLink>
					<MenuNavLink to={'pricing'}>
						<span>Ceník</span>
					</MenuNavLink>
					<MenuNavLink to={'contacts'}>
						<span>Kontakty</span>
					</MenuNavLink>
					<MenuNavLink to={'samples'}>
						<span>Zasílání vzorků</span>
					</MenuNavLink>
					<MenuNavLink to={'request-forms'}>
						<span>Žádanky</span>
					</MenuNavLink>
					<MenuNavLink to={'news'}>
						<span>Aktuality</span>
					</MenuNavLink>
				</List>
			)}
		</MenuWrap>
	)
}

const MenuWrap = styled(Row)`
	position: relative;
	align-items: center;
`
const List = styled(Col)`
	position: fixed;
	z-index: 1;
	top: ${HEADER_HEIGHT_SLIM}px;
	right: 0px;
	width: 100%;
	background: linear-gradient(to right, ${Colors.Gradient.Left}, ${Colors.Gradient.Right});
	max-height: 0;
	overflow: hidden;
	transition: max-height 250ms ease-out;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`
const MenuNavLink = styled(NavLink)`
	color: ${Colors.White};
	font-size: 20px;
	padding: 1.5rem 2rem;
	border: none;
	&:hover {
		color: ${Colors.Black};
		background: ${Colors.White};
	}
`
const MenuIconCss = css`
	color: ${Colors.Black};
	cursor: pointer;
	&:hover {
		color: ${Colors.Orange};
	}
`
const IconOpen = styled(FaBars)`
	${MenuIconCss}
`
const IconClose = styled(CgClose)`
	${MenuIconCss}
	margin-right: -0.5rem;
`
