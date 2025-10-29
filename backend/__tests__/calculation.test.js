const { calculateFuelForRace } = require('../calculation.cjs')

describe('Calculating the fuel for race', () => {
  it('should return the minimum number of laps to complete a 15 minute race, and the required fuel to complete these laps', () => {
    const raceStats = calculateFuelForRace(2, { raceMinutes: 15 }, { lapMinutes: 1, lapSeconds: 30 })

    expect(raceStats).toEqual({maxNumLaps: 10, raceFuel: 20})
  })

  it('should return the minimum number of laps to complete a 1 hour race, and the required fuel to complete these laps', () => {
    const raceStats = calculateFuelForRace(2, { raceHours: 1 }, { lapMinutes: 1, lapSeconds: 30 })

    expect(raceStats).toEqual({maxNumLaps: 40, raceFuel: 80})
  })

  it('should return the minimum number of laps to complete a 90 minute race, and the required fuel to complete these laps (Algarve example)', () => {
    const raceStats = calculateFuelForRace(3.16, { raceHours: 1, raceMinutes: 30 }, { lapMinutes: 1, lapSeconds: 46 })

    expect(raceStats).toEqual({maxNumLaps: 51, raceFuel: 161.16})
  })
})
