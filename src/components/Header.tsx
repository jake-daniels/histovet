import { NavLink } from 'react-router-dom'

interface IProps {}

export function Header(props: IProps) {
	const {} = props

	return (
		<div>
			<NavLink to={'/'}>Home</NavLink>
			<NavLink to={'about-us'}>Kdo jsme</NavLink>
			<NavLink to={'pricing'}>Ceník</NavLink>
			<NavLink to={'contacts'}>Kontakty</NavLink>
			<NavLink to={'samples'}>Zasílání vzorků</NavLink>
			<NavLink to={'request-forms'}>Žádanky</NavLink>
			<NavLink to={'news'}>Aktuality</NavLink>
		</div>
	)
}
