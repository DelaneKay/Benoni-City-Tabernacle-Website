import { useEffect } from 'react'

const BAPTISM_URL = 'https://baptism.benonicitytabernacle.co.za/'

const BCTBaptisms = () => {
  useEffect(() => {
    window.location.replace(BAPTISM_URL)
  }, [])

  return null
}

export default BCTBaptisms
