import styles from './Calculator.module.scss'

import { calculate } from '../../services/calculate'

export default function Calculator() {
  async function calculateFuel(formData: FormData) {
    const lapEnergy = formData.get('lap-energy')
    const lapFuel = formData.get('lap-fuel')
    const lapTimeMinutes = formData.get('lap-time-minutes')
    const lapTimeSeconds = formData.get('lap-time-seconds')
    const raceTimeHours = formData.get('race-time-hours')
    const raceTimeMinutes = formData.get('race-time-minutes')

    const payload = {
      lapDuration: { lapTimeMinutes, lapTimeSeconds },
      lapFuel,
      raceDuration: { raceTimeHours, raceTimeMinutes },
      lapEnergy,
    }

    try {
      const data = await calculate(payload)
    } catch (error) {
      console.error('Error', error)
    }
  }

  return (
    <div className={styles['calculator']}>
      <form action={calculateFuel}>
        <div className='form-row'>
          <label htmlFor='lap-time-minutes'>Lap time (minutes)</label>
          <input name='lap-time-minutes' type='number' />
        </div>
        <div className='form-row'>
          <label htmlFor='lap-time-seconds'>Lap time (seconds)</label>
          <input name='lap-time-seconds' type='number' />
        </div>
        <div className='form-row'>
          <label htmlFor='race-time-hours'>Race time (hours)</label>
          <input name='race-time-hours' type='number' />
        </div>
        <div className='form-row'>
          <label htmlFor='race-time-minutes'>Race time (minutes)</label>
          <input name='race-time-minutes' type='number' />
        </div>
        <div className='form-row'>
          <label htmlFor='lap-fuel'>Lap fuel</label>
          <input name='lap-fuel' type='number' />
        </div>
        <div className='form-row'>
          <label htmlFor='lap-energy'>Lap energy</label>
          <input name='lap-energy' type='number' />
        </div>
        <button type='submit'>Calculate</button>
      </form>
    </div>
  )
}
