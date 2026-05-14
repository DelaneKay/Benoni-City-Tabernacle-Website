import { useEffect } from 'react'

const ONLINE_GIVING_URL = 'https://offering.benonicitytabernacle.co.za/'

const OnlineGiving = () => {
  useEffect(() => {
    window.location.replace(ONLINE_GIVING_URL)
  }, [])

  return null
}

export default OnlineGiving
