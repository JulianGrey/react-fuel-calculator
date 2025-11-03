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
      lapDuration,
      lapFuel,
      raceDuration,
    } = req.body;

    if (!lapDuration || !lapFuel || !raceDuration ) {
      return res.status(400).json({
        error: 'Missing required fields: lapDuration, lapFuel, raceDuration'
      })
    }

    const fuelRequired = calculateFuelForRace(lapDuration, lapFuel, raceDuration)

    res.json({ fuelRequired })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
