/**
 * @typedef {Object} RaceDuration
 * @property {number} [raceHours=0]
 * @property {number} [raceMinutes=0]
 * @property {number} [raceSeconds=0]
 */

/**
 * @typedef {Object} LapDuration
 * @property {number} [lapMinutes=0]
 * @property {number} [lapSeconds=0]
 */

/**
 * Determine how much fuel is required for a given race.
 * @param {LapDuration} lapDuration How long it takes to complete a lap
 * @param {number} lapEnergy How much energy is required to complete one lap
 * @param {number} lapFuel How much fuel is required to complete one lap
 * @param {RaceDuration} raceDuration How long the race will run
 * @returns {{maxNumLaps: number, raceFuel: number, raceEnergy: number, ratio: number}} maxNumLaps assumes no fuel saving
 */
function calculateFuelForRace(
  lapDuration,
  lapFuel,
  raceDuration,
  lapEnergy = 0,
) {
  const { lapMinutes = 0, lapSeconds = 0 } = lapDuration
  const { raceHours = 0, raceMinutes = 0, raceSeconds = 0 } = raceDuration

  const duration = (raceHours * 3600) + (raceMinutes * 60) + raceSeconds
  const lapTime = (lapMinutes * 60) + lapSeconds
  const maxNumLaps = Math.ceil(duration / lapTime)
  const raceEnergy = !!lapEnergy ? parseFloat((maxNumLaps * lapEnergy).toFixed(3)) : undefined
  const raceFuel = parseFloat((maxNumLaps * lapFuel).toFixed(3))
  const ratio = !!lapEnergy ? parseFloat((lapFuel / lapEnergy).toFixed(3)) : undefined

  return ({
    maxNumLaps,
    raceFuel,
    raceEnergy,
    ratio,
  })
}

module.exports = {
  calculateFuelForRace,
}
