/**
 * @typedef {Object} RaceDuration
 * @property {number} [raceTimeHours=0]
 * @property {number} [raceTimeMinutes=0]
 */

/**
 * @typedef {Object} LapDuration
 * @property {number} [lapTimeMinutes=0]
 * @property {number} [lapTimeSeconds=0]
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
  const { lapTimeMinutes = 0, lapTimeSeconds = 0 } = lapDuration
  const { raceTimeHours = 0, raceTimeMinutes = 0 } = raceDuration

  const duration = (raceTimeHours * 3600) + (raceTimeMinutes * 60)
  const lapTime = (lapTimeMinutes * 60) + parseInt(lapTimeSeconds)
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
