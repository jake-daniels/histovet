import { FaFileDownload } from 'react-icons/fa'
import styled from 'styled-components'
import { Colors, SCREEN_BREAKPOINTS } from '../../config'
import { Col, Headline, LeftOrnament, Link, Page, Paragraph, RightOrnament, Row, Text } from '../lib'
import { useAppContext } from '../../context'

function downloadFile(url: string, filename: string) {
	const link = document.createElement('a')
	link.href = url
	link.download = filename
	link.target = '_blank'
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
}

export function SamplesInfoPage() {
	const { samples: data } = useAppContext()

	return (
		<Page>
			<Row $width={'100%'} $gap={'4rem'} $align={'flex-start'} $justify={'space-between'}>
				<Col $gap={'2rem'}>
					<Headline $color={'orange'}>Zasílání vzorků</Headline>
					<Row $gap={'1rem'} $align={'center'}>
						<Text>Žádanka ke stažení zde</Text>
						<DownloadButton onClick={() => downloadFile(data.file, 'HistoVet - žádanka')}>
							<Row $align={'center'} $gap={'0.5rem'}>
								<span>Stáhnout</span>
								<FaFileDownload />
							</Row>
						</DownloadButton>
					</Row>
					<Paragraph>{data.text1}</Paragraph>
					<Row>
						<Link to={'/contacts'}>
							<Col $gap={'0.5rem'}>
								{data.address
									.split('\n')
									.filter(Boolean)
									.map((value, index) => (
										<span key={index}>{value}</span>
									))}
							</Col>
						</Link>
					</Row>
					<Col $gap={'1rem'}>
						{data.text2
							.split('\n')
							.filter(Boolean)
							.map((value, index) => (
								<Paragraph key={index}>{value}</Paragraph>
							))}
					</Col>
				</Col>
				<Image src={data.image} />
			</Row>
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
const Image = styled.img`
	object-fit: contain;
	width: 30%;
	@media screen and (max-width: ${SCREEN_BREAKPOINTS.XS - 1}px) {
		display: none;
	}
`
