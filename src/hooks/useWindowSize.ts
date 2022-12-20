import { useEffect, useState } from 'react'

export function useWindowSize() {
	const [state, setState] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	})

	useEffect(() => {
		const handleResize = () => {
			setState({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return state
}
