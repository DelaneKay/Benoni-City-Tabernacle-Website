import { createContext, useContext } from 'react'

export const HeroLoaderContext = createContext({
  markHeroMediaReady: () => {},
})

export const useHeroLoader = () => useContext(HeroLoaderContext)

export function shouldUseHeroVideoLayout() {
  if (typeof window === 'undefined') {
    return false
  }

  const width = window.innerWidth
  const height = window.innerHeight
  const isLandscape = window.matchMedia('(orientation: landscape)').matches
  const isShortLandscape = isLandscape && height <= 480

  if (isShortLandscape) {
    return false
  }

  if (width >= 1025) {
    return true
  }

  return width >= 768 && width <= 1024 && isLandscape
}
