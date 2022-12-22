import { FaFileDownload } from 'react-icons/fa'
import styled from 'styled-components'
import { Colors } from '../../config'
import { Col, Headline, LeftOrnament, Link, Page, Paragraph, RightOrnament, Row, Text } from '../lib'

export function SamplesInfoPage() {
	return (
		<Page>
			<Col $width={'100%'} $gap={'2rem'}>
				<Headline $color={'orange'}>Zasílání vzorků</Headline>
				<Row $gap={'1rem'} $align={'center'}>
					<Text>Žádanka ke stažení zde</Text>
					<DownloadButton>
						<Row $align={'center'} $gap={'0.5rem'}>
							<span>Stáhnout</span>
							<FaFileDownload />
						</Row>
					</DownloadButton>
				</Row>
				<Paragraph>
					Odběr a fixace vzorku k histopatologickému vyšetření viz zde (tady by měl být link na info o odběru vzorků).
					Vzorek odešlete Vámi zvolenou přepravní společností nebo svozem na adresu:
				</Paragraph>
				<Row>
					<Link to={'/contacts'}>
						<Col $gap={'0.5rem'}>
							<span>HISTOS s.r.o.</span>
							<span>Zábrdovická 15/16a</span>
							<span>615 00 BRNO</span>
						</Col>
					</Link>
				</Row>
				<Col $gap={'1rem'}>
					<Paragraph>Co se děje dál…</Paragraph>
					<Paragraph>
						24-48 hodin fixovaný vzorek je v laboratoři „přikrojen“ (je vybrána reprezentativní část, okraje resekce
						apod.) a je připraven parafinový tkáňový blok a zhotoveny histologické řezy, které jsou barveny tzv.
						přehledným barvením (hematoxylinem a eozinem). Celý tento proces trvá jeden až dva dny. Pokud se jedná o
						tvrdé tkáně, je nutné je nejprve „odvápnit“, což celý proces prodlouží v závislosti na velikosti vzorku o
						jeden den až několik týdnů (například v případě resekátů čelistí).
					</Paragraph>
					<Paragraph>
						Patolog připravené preparáty vyšetří v co nejkratším čase po jejich zhotovení, většinou do druhého dne.
					</Paragraph>
					<Paragraph>
						Výsledky vyšetření jsou zaslány emailem (emailovou adresu prosím uvádějte do žádanky) společně s
						fakturačními údaji.
					</Paragraph>
					<Paragraph>Cytologické vzorky jsou ihned obarveny a většinou vyšetřeny ještě v den doručení.</Paragraph>
					<Paragraph>
						Vzorky ve formalínu jsou v laboratoři uchovávány cca měsíc, parafinové bloky a skla uchováváme po dobu cca
						jednoho roku pro případná další doplňková vyšetření.
					</Paragraph>
				</Col>
			</Col>
			<LeftOrnament $left={'0px'} $top={'2rem'} />
			<RightOrnament $right={'0px'} $bottom={'1rem'} />
		</Page>
	)
}

const DownloadButton = styled.button`
	padding: 0.75rem 1rem;
	background: ${Colors.Orange};
	color: ${Colors.White};
	border: none;
	border-radius: 0.25rem;
	font-weight: 500;
	box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.25);
	cursor: pointer;
	&:hover {
		background: #d76640;
	}
`
