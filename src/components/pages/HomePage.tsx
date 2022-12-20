import { ReactNode } from 'react'
import styled from 'styled-components'
import { Colors } from '../../config'
import { Col, Headline, Link, ResponsiveWrap, Row, Text } from '../lib'
import { ReactComponent as BlockImage } from '../../assets/home-page-image-1.svg'
import { ReactComponent as Ornament } from '../../assets/home-page-ornament.svg'
import MainImageSrc from '../../assets/home-page-image-2.png'

export function HomePage() {
	return (
		<Wrap>
			<ResponsiveWrap>
				<Row $align={'center'} $gap={'6rem'}>
					<Col $gap={'1rem'}>
						<Block
							image={undefined}
							headline={
								<Headline color={'white'}>
									Provádíme <Text color={'orange'}>histopatologické</Text> a <Text color={'orange'}>cytologické</Text>{' '}
									vyšetření pro veterinární lékaře.
								</Headline>
							}
							content={
								<Text color={'white'}>
									Nabízíme histopatologické vyšetření Vámi zaslaných bioptátů a další doplňková vyšetření, jako jsou
									speciální histologická barvení a imunohistochemie. Dále nabízíme cytologické vyšetření tenkojehelných
									a dalších bioptátů a tělních tekutin. Vyšetření se vždy snažíme provést v co nejkratším čase,
									zpravidla do tří dnů od doručení do laboratoře. Sledujeme nejnovější trendy v diagnostice a používáme
									aktuální gradingová schémata. Jsme vždy otevřeni konzultovat vaše případy i poradit s odběrem vzorků,
									abychom společně s Vámi stanovili správnou diagnózu.
								</Text>
							}
						/>
						<Block
							image={<BlockImage width={64} height={64} />}
							headline={
								<Headline color={'orange'}>Veterinární medicína běží kupředu mílovými kroky a my běžíme s ní</Headline>
							}
							content={
								<Text color={'white'}>
									Díky naší spolupráci s humánní bioptickou laboratoří Histos s.r.o. si Vám můžeme dovolit nabídnout{' '}
									<Link color={'white'} to={'/pricing'}>
										bezkonkurenční ceny
									</Link>{' '}
									za vyšetření bioptátů. Přejete-li si s námi spolupracovat, neváhejte{' '}
									<Link color={'white'} to={'/contacts'}>
										nás kontaktovat
									</Link>
									.
								</Text>
							}
						/>
					</Col>
					<Row>
						<MainImage src={MainImageSrc} />
					</Row>
				</Row>
			</ResponsiveWrap>
			<StyledOrnament />
		</Wrap>
	)
}

function Block(props: { image?: ReactNode; headline: ReactNode; content: ReactNode }) {
	return (
		<Col $grow={1}>
			<Row $gap={'2rem'}>
				<Row $minWidth={'4rem'} $minHeight={'4rem'}>
					{props.image}
				</Row>
				{props.headline}
			</Row>
			<Row $padding={'0 0 0 6rem'}> {props.content}</Row>
		</Col>
	)
}

const Wrap = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 2rem 0;
	background: linear-gradient(to right, ${Colors.Gradient.Left}, ${Colors.Gradient.Right});
`
const MainImage = styled.img`
	object-fit: contain;
`
const StyledOrnament = styled(Ornament)`
	position: absolute;
	right: 0;
	bottom: -1rem;
`
