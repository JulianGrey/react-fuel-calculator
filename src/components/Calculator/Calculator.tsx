import { type FormEvent, useState } from 'react'
import styles from './Calculator.module.scss'
import { calculate } from '../../services/calculate'
import type { FuelResult, LapInputData } from '../../models'

export default function Calculator() {
  const [result, setResult] = useState<FuelResult>()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault()
    const formData = new FormData(event.currentTarget)

    const lapEnergy = Number(formData.get('lap-energy'))
    const lapFuel = Number(formData.get('lap-fuel'))
    const lapTimeMinutes = Number(formData.get('lap-time-minutes'))
    const lapTimeSeconds = Number(formData.get('lap-time-seconds'))
    const raceTimeHours = Number(formData.get('race-time-hours'))
    const raceTimeMinutes = Number(formData.get('race-time-minutes'))

    const payload: LapInputData = {
      lapDuration: { lapTimeMinutes, lapTimeSeconds },
      lapFuel,
      raceDuration: { raceTimeHours, raceTimeMinutes },
      lapEnergy,
    }

    try {
      const data = await calculate(payload)
      setResult(data.fuelData)
    } catch (error) {
      console.error('Error', error)
    }
  }

  return (
    <div className={styles['calculator']}>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-row']}>
          <span className={styles['label']}>Lap time:</span>
          <input
            name='lap-time-minutes'
            type='number'
            placeholder='mins'
            min='0'
            max='59'
          />
          <input
            name='lap-time-seconds'
            type='number'
            placeholder='secs'
            min='0'
            max='59'
            step='any'
          />
        </div>
        <div className={styles['form-row']}>
          <span className={styles['label']}>Race time:</span>
          <input
            name='race-time-hours'
            type='number'
            placeholder='hours'
            min='0'
            max='24'
          />
          <input
            name='race-time-minutes'
            type='number'
            placeholder='mins'
            min='0'
            max='59'
          />
        </div>
        <div className={styles['form-row']}>
          <span className={styles['label']}>Lap fuel:</span>
          <input
            name='lap-fuel'
            type='number'
            step='any'
          />
        </div>
        <div className={styles['form-row']}>
          <span className={styles['label']}>Lap energy:</span>
          <input
            name='lap-energy'
            type='number'
            step='any'
          />
        </div>
        <button type='submit'>Calculate</button>
      </form>
      {result && (
        <div className='results'>
          <div className='max-number-of-laps'>
            <div>Max laps (covered by fuel): { result.maxNumLaps }</div>
          </div>
          <div className='fuel-required'>
            <div>Fuel Required: { result.raceFuel }</div>
          </div>
          {result.raceEnergy && (
            <>
              <div className='energy-required'>
                <div>Energy Required: { result.raceEnergy }</div>
              </div>
              <div className='fuel-ratio'>
                <div>Fuel ratio: { result.ratio }</div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
