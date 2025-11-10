import axios from 'axios'

interface LapDuration {
  lapTimeMinutes: number;
  lapTimeSeconds: number;
}

interface RaceDuration {
  raceTimeHours: number;
  raceTimeMinutes: number;
}

interface RaceInfo {
  lapEnergy?: number;
  lapFuel: number;
  lapDuration: LapDuration;
  raceDuration: RaceDuration
}

const apiUrl = 'http://localhost:3000/api'

export const calculate = async (raceInfo: RaceInfo) => {
  const { lapDuration, lapFuel, raceDuration, lapEnergy } = raceInfo

  const { data } = await axios.post(`${apiUrl}/calculate-race-fuel`, {
    lapDuration,
    lapFuel,
    raceDuration,
    lapEnergy,
  })

  return data
}
