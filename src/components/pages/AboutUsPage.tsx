import styled from 'styled-components'
import { SCREEN_BREAKPOINTS } from '../../config'
import { useAppContext } from '../../context'
import { useIsMobile } from '../../hooks'
import { IPerson } from '../../types'
import { Col, Flex, Headline, LeftOrnament, Page, Paragraph, RightOrnament, Row, Text } from '../lib'

export function AboutUsPage() {
	const { aboutUsPage: data } = useAppContext()

	const isMobile = useIsMobile()

	return (
		<Page>
			<Row $align={'center'} $gap={'6rem'}>
				<Col $gap={'4rem'} $align={isMobile ? 'center' : 'flex-start'}>
					<Row $width={isMobile ? '100%' : '60%'}>
						<Paragraph $textAlign={isMobile ? 'center' : 'initial'}>{data.intro}</Paragraph>
					</Row>
					{data.people.map((person, index) => (
						<Person key={index} name={person.name} description={person.content} image={person.image} index={index} />
					))}
				</Col>
			</Row>
			<LeftOrnament $left={'0px'} $top={'2rem'} />
			<RightOrnament $right={'0px'} $bottom={'1rem'} />
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
				<Paragraph $textAlign={'center'}>{description}</Paragraph>
			</Col>
		)
	}

	return (
		<Flex
			$width={'100%'}
			$align={'flex-start'}
			$justify={'space-between'}
			$gap={'4rem'}
			$direction={index % 2 === 0 ? 'row-reverse' : 'row'}
		>
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
