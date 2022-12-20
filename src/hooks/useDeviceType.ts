import { useMemo } from 'react'
import { SCREEN_BREAKPOINTS } from '../config'
import { DeviceType } from '../types'
import { useWindowSize } from './useWindowSize'

export function useDeviceType() {
	const windowSize = useWindowSize()

	return useMemo<DeviceType>(() => {
		const isMobile = windowSize.width < SCREEN_BREAKPOINTS.XS
		return isMobile ? 'mobile' : 'desktop'
	}, [windowSize.width])
}
