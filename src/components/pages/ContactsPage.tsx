import styled from 'styled-components'
import { Colors } from '../../config'
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
	const isMobile = useIsMobile()

	return (
		<Page>
			<Flex
				$width={'100%'}
				$direction={isMobile ? 'column' : 'row'}
				$align={isMobile ? 'center' : 'initial'}
				$justify={'space-between'}
			>
				<Col $gap={'2rem'}>
					<Text>Kontakty</Text>
					<Col $gap={'0.5rem'}>
						<Row $gap={'0.5rem'}>
							<Text>Telefon:</Text>
							<ExternalLink href={'tel:+420777123456'}>+420 777 123 456</ExternalLink>
						</Row>
						<Row $gap={'0.5rem'}>
							<Text>Email:</Text>
							<ExternalLink href={'mailto:info@histovet.cz'}>info@histovet.cz</ExternalLink>
						</Row>
					</Col>
					<Col $gap={'0.5rem'}>
						<Text $size={'small'}>Adresa pro zasílání vzorků</Text>
						<Text>HISTOS s.r.o.</Text>
						<Text>Zábrdovická 15/16a</Text>
						<Text>615 00 BRNO</Text>
					</Col>
				</Col>
				<iframe
					title={'location-preview'}
					src={
						'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.966146030872!2d16.629310212101426!3d49.201201776401184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471294f2e3506e29%3A0x1a804f561d81fb0e!2zWsOhYnJkb3ZpY2vDoSAxNS8xNiwgNjE1IDAwIEJybm8txb1pZGVuaWNl!5e0!3m2!1sen!2scz!4v1671713540298!5m2!1sen!2scz'
					}
					width={isMobile ? '100%' : 600}
					height={isMobile ? 250 : 400}
					style={{ border: 'none' }}
					allowFullScreen={false}
					loading={'lazy'}
					referrerPolicy={'no-referrer-when-downgrade'}
				/>
			</Flex>
			<LeftBubble width={'25%'} $left={'4rem'} $top={'2rem'} />
			<RightBubble width={'10%'} $left={'30%'} $top={'10rem'} />
			<RightTopBubble width={'12%'} $left={'40%'} $top={'-5rem'} />
			<RightOrnament $right={'0px'} $bottom={'1rem'} />
		</Page>
	)
}
