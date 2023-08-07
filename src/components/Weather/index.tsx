import { useEffect, useState } from 'react'
import { GetLocation } from '../../utils/geolocation'
import { WeatherContainer } from './styles'
import { CloudSun, Drop } from 'phosphor-react'

interface WeatherProps {
  weather: [
    {
      description: string
    },
  ]
  main: {
    temp: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  sys: {
    country: string
  }
  name: string
}

export function Weather() {
  const { location } = GetLocation()
  const [weatherConditions, setWeatherConditions] = useState<WeatherProps>()

  const myAPIkey = '3ec10d8148879ff37d2c06c548cfe2d7'

  useEffect(() => {
    async function getWeather() {
      try {
        if (location) {
          const responseWeather = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${myAPIkey}&lang=pt_br`,
          )
          const dataWeather = await responseWeather.json()
          setWeatherConditions(dataWeather)
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error('Erro ao obter a localização/clima:', error.message)
        }
      }
    }

    getWeather()
  }, [location])

  return (
    <WeatherContainer>
      <header>
        <span>Condições climáticas </span>
        <CloudSun size={32} color="#00b37e" />
      </header>
      <strong>
        {weatherConditions && (
          <div>
            <p>
              {weatherConditions.name} -{' '}
              {Math.round(weatherConditions.main.temp - 273.15)}°C
            </p>
            <section>
              <p>
                <Drop size={15} color="#00b37e" />{' '}
                {weatherConditions.main.humidity}%{' /'}
              </p>
              <p>&nbsp;{weatherConditions.weather[0].description}</p>
            </section>
          </div>
        )}
      </strong>
    </WeatherContainer>
  )
}
