import { ReactNode } from 'react'
import styled from 'styled-components'
import { ReactComponent as BlockImage } from '../../assets/home-page-image-1.svg'
import MainImageSrc from '../../assets/home-page-image-2.png'
import { ReactComponent as Ornament } from '../../assets/home-page-ornament.svg'
import { Colors, SCREEN_BREAKPOINTS } from '../../config'
import { useWindowSize } from '../../hooks'
import { Col, Headline, Link, Page, Paragraph, Row, Text } from '../lib'

export function HomePage() {
	return (
		<StyledPage>
			<Row $align={'center'} $gap={'6rem'}>
				<Col $gap={'2rem'}>
					<Block
						image={undefined}
						headline={
							<Headline $color={'white'}>
								Provádíme <Text $color={'orange'}>histopatologické</Text> a <Text $color={'orange'}>cytologické</Text>{' '}
								vyšetření pro veterinární lékaře.
							</Headline>
						}
						content={
							<Paragraph $color={'white'}>
								Nabízíme histopatologické vyšetření Vámi zaslaných bioptátů a další doplňková vyšetření, jako jsou
								speciální histologická barvení a imunohistochemie. Dále nabízíme cytologické vyšetření tenkojehelných a
								dalších bioptátů a tělních tekutin. Vyšetření se vždy snažíme provést v co nejkratším čase, zpravidla do
								tří dnů od doručení do laboratoře. Sledujeme nejnovější trendy v diagnostice a používáme aktuální
								gradingová schémata. Jsme vždy otevřeni konzultovat vaše případy i poradit s odběrem vzorků, abychom
								společně s Vámi stanovili správnou diagnózu.
							</Paragraph>
						}
					/>
					<Block
						image={<BlockImage width={64} height={64} />}
						headline={
							<Headline $color={'orange'}>Veterinární medicína běží kupředu mílovými kroky a my běžíme s ní.</Headline>
						}
						content={
							<Paragraph $color={'white'}>
								Díky naší spolupráci s humánní bioptickou laboratoří Histos s.r.o. si Vám můžeme dovolit nabídnout{' '}
								<Link $color={'white'} to={'/pricing'}>
									bezkonkurenční ceny
								</Link>{' '}
								za vyšetření bioptátů. Přejete-li si s námi spolupracovat, neváhejte{' '}
								<Link $color={'white'} to={'/contacts'}>
									nás kontaktovat
								</Link>
								.
							</Paragraph>
						}
					/>
				</Col>
				<MainImage src={MainImageSrc} />
			</Row>
			<StyledOrnament />
		</StyledPage>
	)
}

function Block(props: { image?: ReactNode; headline: ReactNode; content: ReactNode }) {
	const { width } = useWindowSize()

	const smallScreen = width < SCREEN_BREAKPOINTS.SM
	const indentText = props.image || !smallScreen

	return (
		<Col $grow={1} $gap={'0.5rem'}>
			<Row $gap={indentText ? '2rem' : 0} $align={'center'}>
				<Row $display={indentText ? 'flex' : 'none'} $minWidth={'4rem'} $minHeight={'4rem'}>
					{props.image}
				</Row>
				{props.headline}
			</Row>
			<Row $padding={smallScreen ? 0 : '0 0 0 6rem'}> {props.content}</Row>
		</Col>
	)
}

const StyledPage = styled(Page)`
	background: linear-gradient(to right, ${Colors.Gradient.Left}, ${Colors.Gradient.Right});
`
const MainImage = styled.img`
	object-fit: contain;
	width: 33%;
	@media screen and (max-width: ${SCREEN_BREAKPOINTS.SM - 1}px) {
		display: none;
	}
`
const StyledOrnament = styled(Ornament)`
	position: absolute;
	right: 0;
	bottom: -1rem;
`
