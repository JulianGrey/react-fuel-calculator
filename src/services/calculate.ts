import axios from 'axios'

const apiUrl = 'http://localhost:3000/api'

export const calculate = async (raceInfo) => {
  const { lapDuration, lapFuel, raceDuration, lapEnergy } = raceInfo

  const {data} = await axios.post(`${apiUrl}/calculate-race-fuel`, {
    lapDuration,
    lapFuel,
    raceDuration,
    lapEnergy,
  })

  return data
}
