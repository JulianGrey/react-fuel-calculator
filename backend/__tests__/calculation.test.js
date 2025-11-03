const { calculateFuelForRace } = require('../calculation.cjs')

describe('Calculating the fuel for race', () => {
  it('should return the minimum number of laps to complete a 15 minute race, and the required fuel to complete these laps', () => {
    const raceStats = calculateFuelForRace({ lapMinutes: 1, lapSeconds: 30 }, 2, { raceMinutes: 15 })

    expect(raceStats).toEqual({maxNumLaps: 10, raceFuel: 20})
  })

  it('should return the minimum number of laps to complete a 1 hour race, and the required fuel to complete these laps', () => {
    const raceStats = calculateFuelForRace({ lapMinutes: 1, lapSeconds: 30 }, 2, { raceHours: 1 })

    expect(raceStats).toEqual({maxNumLaps: 40, raceFuel: 80})
  })

  it('should return the minimum number of laps to complete a 90 minute race, and the required fuel to complete these laps (Algarve example)', () => {
    const raceStats = calculateFuelForRace({ lapMinutes: 1, lapSeconds: 46 }, 3.16, { raceHours: 1, raceMinutes: 30 })

    expect(raceStats).toEqual({maxNumLaps: 51, raceFuel: 161.16})
  })

  it('should return the minimum number of laps to complete a 15 minute race, and the required fuel and energy to complete these laps when lap energy is provided, and fuel/energy ratio', () => {
    const raceStats = calculateFuelForRace({ lapMinutes: 1, lapSeconds: 30 }, 2, { raceMinutes: 15 }, 3)

    expect(raceStats).toEqual({maxNumLaps: 10, raceFuel: 20, raceEnergy: 30, ratio: 0.667})
  })

  it('should return the minimum number of laps to complete a 15 minute race, and the required fuel and energy to complete these laps when lap energy is provided, and fuel/energy ratio (Algarve example)', () => {
    const raceStats = calculateFuelForRace({ lapMinutes: 1, lapSeconds: 46 }, 3.16, { raceHours: 1, raceMinutes: 30 }, 3.56)

    expect(raceStats).toEqual({maxNumLaps: 51, raceFuel: 161.16, raceEnergy: 181.56, ratio: 0.888})
  })
})
