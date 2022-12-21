import styled from 'styled-components'
import BarboraImage from '../../assets/about-us-barbora-moldovan-putnova.png'
import MisaSkoricImage from '../../assets/about-us-misa-skoric.png'
import { ReactComponent as Ornament } from '../../assets/home-page-ornament.svg'
import { SCREEN_BREAKPOINTS } from '../../config'
import { useIsMobile } from '../../hooks'
import { IPerson } from '../../types'
import { Col, Flex, Headline, Page, Paragraph, Row, Text } from '../lib'

export function AboutUsPage() {
	const isMobile = useIsMobile()

	return (
		<Page>
			<Row $align={'center'} $gap={'6rem'}>
				<Col $gap={'4rem'} $align={isMobile ? 'center' : 'flex-start'}>
					<Row $width={isMobile ? '100%' : '60%'}>
						<Paragraph $textAlign={isMobile ? 'justify' : 'initial'}>
							Jsme dvojice veterinárních patologů, kteří se rozhodli spojit své síly, aby mohla vzniknout veterinární
							histopatologická laboratoř, která Vám zaručí rychlé a dostupné vyšetření. Dohromady se diagnostické praxi
							věnujeme téměř třicet let!
						</Paragraph>
					</Row>
					<Person
						name={'Doc. MVDr. Miša Škorič, Ph.D.'}
						description={
							'Studium na veterinární univerzitě ukončil v roce 2003 a následně navázal postgraduálním studiem, které ukončil v roce 2007 úspěšným obhájením dizertační práce. Habilitoval o pět let později v oboru „Normální a patologická morfologie“. Patologicko-diagnostické praxi (zahrnující kromě běžných savčích druhů i ptáky, drobné savce, plazy a nižší obratlovce) se věnuje aktivně již více než 20 let. V rámci odborných stáží absolvoval pobyty na veterinárních patologických institucích v USA, Finsku, Holandsku, Slovinsku, Maďarsku a Rakousku. Věnuje se také pedagogické činnosti. Je autorem nebo spoluautorem více než 100 publikací ve vědeckých a odborných časopisech, a více než 50 příspěvků na odborných konferencích v ČR a zahraničí.'
						}
						image={MisaSkoricImage}
						index={0}
					/>
					<Person
						name={'MVDr. Barbora Moldovan Putnová, Ph.D.'}
						description={
							'Studium veterinární medicíny ukončila v roce 2016 a následně pokračovala postgraduálním studiem v oboru veterinární patologie a parazitologie, které úspěšně ukončila v roce 2020 obhajobou dizertační práce zaměřené na patologii dutiny ústní. V témže roce nastoupila do privátní patologicko-diagnostické laboratoře jako histologický patolog. Diagnostice se aktivně věnuje již více než 6 let a zkušenosti sbírala také na zahraničních stážích, a to především ve Švýcarsku. V rámci svého více než desetiletého působení na Akademii věd se věnuje výzkumu orálních neoplazií jak u zvířat, tak u lidí, a je autorkou a spoluautorkou mnoha odborných publikací a pravidelně se účastní zahraničních i tuzemských odborných konferencí. Je členkou European Society of Veterinary Pathologists a britské Royal College of Veterinary Pathologists. Má bohatou zkušenost se zpracováním vzorků a ráda Vám poradí, jak odebrané vzorky tkání správně fixovat a transportovat s cílem dosáhnout co nejvalidnější diagnózy.'
						}
						image={BarboraImage}
						index={1}
					/>
				</Col>
			</Row>
			<StyledOrnament1 />
			<StyledOrnament2 />
		</Page>
	)
}

function Person(props: IPerson & { index: number }) {
	const { name, image, description, index } = props

	const isMobile = useIsMobile()

	if (isMobile) {
		return (
			<Col $gap={'2rem'} $align={'center'}>
				<Headline $color={'orange'}>{name}</Headline>
				<Image src={image} />
				<Paragraph $textAlign={'justify'}>{description}</Paragraph>
			</Col>
		)
	}

	return (
		<Flex $align={'flex-start'} $gap={'4rem'} $direction={index % 2 === 0 ? 'row-reverse' : 'row'}>
			<Image src={image} />
			<Col $gap={'1rem'}>
				<Headline $color={'orange'}>{name}</Headline>
				<Text>{description}</Text>
			</Col>
		</Flex>
	)
}

const Image = styled.img`
	object-fit: contain;
	width: 30%;
	@media screen and (max-width: ${SCREEN_BREAKPOINTS.XS - 1}px) {
		width: 60%;
	}
`
const StyledOrnament1 = styled(Ornament)`
	position: absolute;
	right: 0;
	bottom: 4rem;
`
const StyledOrnament2 = styled(Ornament)`
	position: absolute;
	left: -2rem;
	top: 4rem;
	transform: scaleX(-1);
`
