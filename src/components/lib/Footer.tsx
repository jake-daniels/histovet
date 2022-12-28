import { useAppContext } from '../../context'
import { Col } from './Flexbox'
import { ResponsiveWrap } from './ResponsiveWrap'
import { Text } from './Typography'

export function Footer() {
	const { footer: data } = useAppContext()

	return (
		<footer>
			<ResponsiveWrap>
				<Col $gap={'0.25rem'} $width={'600px'} $padding={'2rem 0'}>
					<Text $color={'orange'}>© {new Date().getFullYear()}</Text>
					<Text>{data.content}</Text>
				</Col>
			</ResponsiveWrap>
		</footer>
	)
}
