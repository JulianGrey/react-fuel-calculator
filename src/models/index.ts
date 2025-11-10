export interface FuelResult {
  maxNumLaps: number;
  raceEnergy?: number;
  raceFuel: number;
  ratio?: number;
}

interface LapDuration {
  lapTimeMinutes: number;
  lapTimeSeconds: number;
}

interface RaceDuration {
  raceTimeHours: number;
  raceTimeMinutes: number;
}

export interface LapInputData {
  lapDuration: LapDuration;
  lapEnergy: number;
  lapFuel: number;
  raceDuration: RaceDuration;
}
