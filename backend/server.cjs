const express = require('express')
const cors = require('cors')

const {
  calculateFuelForRace,
} = require('./calculation.cjs')

const app = express()
const port = 3000

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}))
app.use(express.json())

app.post('/api/calculate-race-fuel', (req, res) => {
  try {
    const {
      energyIsRequirement,
      lapDuration,
      lapFuel,
      raceDuration,
      lapEnergy,
    } = req.body;

    if (energyIsRequirement && !lapEnergy) {
      return res.status(400).json({
        error: 'Missing required field: lapEnergy'
      })
    }

    if (!lapDuration || !lapFuel || !raceDuration ) {
      return res.status(400).json({
        error: 'Missing required fields: lapDuration, lapFuel, raceDuration'
      })
    }

    const fuelRequired = calculateFuelForRace(lapDuration, lapFuel, raceDuration, lapEnergy)

    res.json({ fuelRequired })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
