const express = require('express')
const {
  calculateFuelForRace,
} = require('./calculation.cjs')

const app = express()
const port = 3000

app.use(express.json())

app.post('/api/calculate-race-fuel', (req, res) => {
  try {
    const {
      fuelPerLap,
      lapDuration,
      raceDuration,
    } = req.body;

    if (!fuelPerLap || !lapDuration || !raceDuration ) {
      return res.status(400).json({
        error: 'Missing required fields: fuelPerLap, lapDuration, raceDuration'
      })
    }

    const fuelRequired = calculateFuelForRace(fuelPerLap, lapDuration, raceDuration)

    res.json({ fuelRequired })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
