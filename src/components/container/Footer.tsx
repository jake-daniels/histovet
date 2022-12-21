import { Col, ResponsiveWrap, Text } from '../lib'

export function Footer() {
	return (
		<footer>
			<ResponsiveWrap>
				<Col $gap={'0.25rem'} $padding={'2rem 0'}>
					<Text $color={'orange'}>© 2022</Text>
					<Text>HistoVet s.r.o. IČO 17785405, Příčná 1892/4, Nové Město, 110 00 Praha 1,</Text>
					<Text>vedená u Městského soudu v Praze</Text>
				</Col>
			</ResponsiveWrap>
		</footer>
	)
}
