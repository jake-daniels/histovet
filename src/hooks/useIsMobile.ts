import { useDeviceType } from './useDeviceType'

export function useIsMobile() {
	return useDeviceType() === 'mobile'
}
