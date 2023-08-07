import { useEffect, useState } from 'react'

export interface LocationProps {
  display_name: string
  address: {
    road: string
    quarter: string
    suburb: string
    city_district: string
    city: string
    municipality: string
    county: string
    state_district: string
    state: string
    region: string
    postcode: string
    country: string
    country_code: string
  }
}

export function GetLocation() {
  const [latitude, setLatitude] = useState<number | null>(null)
  const [longitude, setLongitude] = useState<number | null>(null)
  const [location, setLocation] = useState<LocationProps | object | string>('')

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)

          const getLocation = await fetch(
            'https://nominatim.openstreetmap.org/reverse?lat=' +
              position.coords.latitude +
              '&lon=' +
              position.coords.longitude +
              '&format=json',
          )

          const dataLocation: LocationProps = await getLocation.json()
          setLocation(dataLocation.address.city)
        },
        (error) => {
          console.error('Erro ao obter a localização:', error.message)
        },
      )
    } else {
      console.error('Geolocalização não suportada neste navegador.')
    }
  }, [])

  return { latitude, longitude, location }
}
