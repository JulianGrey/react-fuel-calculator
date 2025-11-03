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
 * @param {number} lapFuel How much fuel is required to complete one lap
 * @param {RaceDuration} raceDuration How long the race will run
 * @returns {{maxNumLaps: number, raceFuel: number}}
 */
function calculateFuelForRace(
  lapDuration,
  lapFuel,
  raceDuration,
) {
  const { raceHours = 0, raceMinutes = 0, raceSeconds = 0 } = raceDuration
  const { lapMinutes = 0, lapSeconds = 0 } = lapDuration
  const duration = (raceHours * 3600) + (raceMinutes * 60) + raceSeconds
  const lapTime = (lapMinutes * 60) + lapSeconds
  const maxNumLaps = Math.ceil(duration / lapTime)
  const raceFuel = (maxNumLaps * lapFuel)

  return ({
    maxNumLaps,
    raceFuel,
  })
}

module.exports = {
  calculateFuelForRace,
}
