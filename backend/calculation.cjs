/**
 * @typedef {Object} RaceDuration
 * @property {number} [raceHours=0]
 * @property {number} [raceMinutes=0]
 * @property {number} [raceSeconds=0]
 */

/**
 * @typedef {Object} LapTime
 * @property {number} [lapMinutes=0]
 * @property {number} [lapSeconds=0]
 */

/**
 * Determine how much fuel is required for a given race.
 * @param {number} fuelPerLap How much fuel is required to complete one lap
 * @param {RaceDuration} raceDuration How long the race will run
 * @param {LapTime} timePerLap How long it takes to complete a lap
 * @returns {{numLaps: number, raceFuel: number}}
 */
function calculateFuelForRace(
  fuelPerLap,
  raceDuration,
  timePerLap,
) {
  const { raceHours = 0, raceMinutes = 0, raceSeconds = 0 } = raceDuration
  const { lapMinutes = 0, lapSeconds = 0 } = timePerLap
  const duration = (raceHours * 3600) + (raceMinutes * 60) + raceSeconds
  const lapTime = (lapMinutes * 60) + lapSeconds
  const numLaps = (duration / lapTime)
  const raceFuel = (numLaps * fuelPerLap)

  return ({
    numLaps,
    raceFuel,
  })
}

module.exports = {
  calculateFuelForRace,
}
