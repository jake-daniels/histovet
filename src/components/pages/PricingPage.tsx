import styled from 'styled-components'
import { Colors } from '../../config'
import { useAppContext } from '../../context'
import { useIsMobile } from '../../hooks'
import { Col, Flex, LeftOrnament, Page, RightOrnament, Row, Text } from '../lib'

export function PricingPage() {
	const { pricing: data } = useAppContext()

	const isMobile = useIsMobile()

	return (
		<Page>
			<Col $width={'100%'} $gap={'2rem'} $align={isMobile ? 'center' : 'flex-start'}>
				<Text>Ceník vyšetření:</Text>
				<Flex $direction={isMobile ? 'column' : 'row'} $gap={'2rem'} $wrap={'wrap'}>
					{data.items.map((item, index) => (
						<Card key={index} subject={item.name} price={item.price} />
					))}
				</Flex>
				<Row>
					<Text>
						<b>{data.note}</b>
					</Text>
				</Row>
				<Text>Další vyšetření:</Text>
				<Flex $direction={isMobile ? 'column' : 'row'} $gap={'2rem'} $wrap={'wrap'}>
					{data.otherItems.map((item, index) => (
						<Card key={index} subject={item.name} price={item.price} />
					))}
				</Flex>
			</Col>
			<LeftOrnament $left={'0px'} $top={'2rem'} />
			<RightOrnament $right={'0px'} $bottom={'1rem'} />
		</Page>
	)
}

function Card(props: { subject: string; price: string }) {
	const { subject, price } = props

	return (
		<CardWrap>
			<Text $color={'white'}>{subject}</Text>
			{price}
		</CardWrap>
	)
}

const CardWrap = styled(Col)`
	width: 15rem;
	height: 5rem;
	justify-content: space-between;
	padding: 1rem;
	border-radius: 0.5rem;
	background: ${Colors.Orange};
	box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.25);
`
