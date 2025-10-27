/**
 * @typedef {Object} RaceDuration
 * @property {number} [hours=0]
 * @property {number} [minutes=0]
 * @property {number} [seconds=0]
 */

/**
 * Determine how much fuel is required for a given race.
 * @param {number} fuelPerLap How much fuel is required to complete one lap
 * @param {RaceDuration} raceDuration How long the race will run
 * @param {number} timePerLap How long it takes to complete a lap
 * @returns {{numLaps: number, raceFuel: number}}
 */
function calculateFuelForRace(
  fuelPerLap,
  raceDuration,
  timePerLap,
) {
  const { hours = 0, minutes = 0, seconds = 0 } = raceDuration
  const duration = (hours * 3600) + (minutes * 60) + seconds
  const numLaps = (duration / timePerLap)
  const raceFuel = (numLaps * fuelPerLap)

  return ({
    numLaps,
    raceFuel,
  })
}

module.exports = {
  calculateFuelForRace,
}
