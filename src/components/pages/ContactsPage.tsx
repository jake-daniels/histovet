import { Colors } from '../../config'
import { useAppContext } from '../../context'
import { useIsMobile } from '../../hooks'
import {
	Col,
	ExternalLink,
	Flex,
	LeftBubble,
	Page,
	RightBubble,
	RightOrnament,
	RightTopBubble,
	Row,
	Text,
} from '../lib'

export function ContactsPage() {
	const { contacts: data } = useAppContext()

	const isMobile = useIsMobile()

	return (
		<Page>
			<Flex $width={'100%'} $direction={isMobile ? 'column' : 'row'} $justify={'space-between'}>
				<Col $gap={'2rem'} $width={isMobile ? '100%' : '40%'}>
					<Text>Kontakty</Text>
					<Col $gap={'0.5rem'}>
						<Row $gap={'0.5rem'}>
							<Text>Telefon:</Text>
							{data.phoneNumbers.map((value, index) => (
								<ExternalLink key={index} href={`tel:${value.replace(/\s/g, '')}`}>
									{value}
								</ExternalLink>
							))}
						</Row>
						<Row $gap={'0.5rem'}>
							<Text>Email:</Text>
							{data.emails.map((value, index) => (
								<ExternalLink key={index} href={`mailto:${value}`}>
									{value}
								</ExternalLink>
							))}
						</Row>
					</Col>
					<Col $gap={'0.5rem'}>
						<Text $size={'small'}>Adresa pro zasílání vzorků</Text>
						{data.address
							.split('\n')
							.filter(Boolean)
							.map((value, index) => (
								<Text key={index}>{value}</Text>
							))}
					</Col>
				</Col>
				<Flex $width={isMobile ? '100%' : '60%'} $justify={'flex-end'}>
					<iframe
						title={'location-preview'}
						src={data.location}
						width={'100%'}
						height={isMobile ? 250 : 500}
						style={{ border: `2px solid ${Colors.White}`, borderRadius: 16 }}
						allowFullScreen={false}
						loading={'lazy'}
						referrerPolicy={'no-referrer-when-downgrade'}
					/>
				</Flex>
			</Flex>
			<LeftBubble width={'25%'} $left={'4rem'} $top={'2rem'} />
			<RightBubble width={'10%'} $left={'30%'} $top={'10rem'} />
			<RightTopBubble width={'12%'} $left={'40%'} $top={'-5rem'} />
			<RightOrnament $right={'0px'} $bottom={'1rem'} />
		</Page>
	)
}
