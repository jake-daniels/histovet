import { LeftOrnament, Page, RightOrnament } from '../lib'

export function NewsPage() {
	return (
		<Page>
			Lorem ipsum
			<LeftOrnament $left={'0px'} $top={'2rem'} />
			<RightOrnament $right={'0px'} $bottom={'1rem'} />
		</Page>
	)
}
