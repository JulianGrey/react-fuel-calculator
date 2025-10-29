const { calculateFuelForRace } = require('../calculation.cjs')

describe('Calculating the fuel for race', () => {
  it('should give the amount of fuel required for a race, and the number of laps to complete a 15 minute race', () => {
    const raceStats = calculateFuelForRace(2, { raceMinutes: 15 }, { lapMinutes: 1, lapSeconds: 30 })

    expect(raceStats).toEqual({numLaps: 10, raceFuel: 20})
  })

  it('should give the amount of fuel required for a race, and the number of laps to complete a 1 hour race', () => {
    const raceStats = calculateFuelForRace(2, { raceHours: 1 }, { lapMinutes: 1, lapSeconds: 30 })

    expect(raceStats).toEqual({numLaps: 40, raceFuel: 80})
  })
})
