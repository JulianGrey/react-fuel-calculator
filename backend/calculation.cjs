/**
 * @typedef {Object} RaceParams
 * @property {number} fuelPerLap How much fuel is required to complete one lap
 * @property {number} raceDuration How long the race will run
 * @property {number} timePerLap How long it takes to complete a lap
 */

/**
 * Determine how much fuel is required for a given race.
 * @param {RaceParams}
 * @returns {number}
 */
function calculateFuelForRace(
  fuelPerLap,
  raceDuration,
  timePerLap,
) {
  const numLaps = (raceDuration / timePerLap)
  const raceFuel = (numLaps * fuelPerLap)

  return ({
    numLaps,
    raceFuel,
  })
}

module.exports = {
  calculateFuelForRace,
}
