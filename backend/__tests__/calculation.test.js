const { calculateFuelForRace } = require('../calculation.cjs')

describe('Calculating the fuel for race', () => {
  it('should give the amount of fuel required for a race, and the number of laps to complete a 15 minute race', () => {
    const raceStats = calculateFuelForRace(2, { minutes: 15 }, 90)

    expect(raceStats).toEqual({numLaps: 10, raceFuel: 20})
  })

  it('should give the amount of fuel required for a race, and the number of laps to complete a 1 hour race', () => {
    const raceStats = calculateFuelForRace(2, { hours: 1 }, 90)

    expect(raceStats).toEqual({numLaps: 40, raceFuel: 80})
  })
})
