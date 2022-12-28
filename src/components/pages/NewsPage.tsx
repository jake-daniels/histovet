import styled from 'styled-components'
import { SCREEN_BREAKPOINTS } from '../../config'
import { useAppContext } from '../../context'
import { useIsMobile } from '../../hooks'
import { CMS_NewsItem } from '../../types'
import { Col, Flex, Headline, LeftOrnament, Page, Paragraph, RightOrnament } from '../lib'

export function NewsPage() {
	const { news: data } = useAppContext()

	return (
		<Page>
			<Col $gap={'2rem'}>
				{data.items.reverse().map((item, index) => (
					<Article key={index} index={index} {...item} />
				))}
			</Col>
			<LeftOrnament $left={'0px'} $top={'2rem'} />
			<RightOrnament $right={'0px'} $bottom={'1rem'} />
		</Page>
	)
}

function Article(props: CMS_NewsItem & { index: number }) {
	const { title, date, content, image, index } = props

	const isMobile = useIsMobile()

	if (isMobile) {
		return (
			<Col $gap={'2rem'} $align={'center'}>
				<Headline $color={'orange'}>{title}</Headline>
				<ArticleDate>{date}</ArticleDate>
				<Image src={image} />
				<Paragraph $textAlign={'center'}>{content}</Paragraph>
			</Col>
		)
	}

	return (
		<Flex $align={'flex-start'} $gap={'4rem'} $direction={index % 2 === 0 ? 'row-reverse' : 'row'}>
			<Image src={image} />
			<Col $gap={'1rem'}>
				<Headline $color={'orange'}>{title}</Headline>
				<ArticleDate>{date}</ArticleDate>
				<Paragraph>{content}</Paragraph>
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
const ArticleDate = styled.span`
	font-size: 14px;
	color: grey;
`
