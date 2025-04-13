import express from 'express'
import pullRequest from './routes/pull-requests'

const app = express()
const PORT = 3000

// Middleware
app.use(express.json())

// CRUD Routes

// Start server
app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`)

    pullRequest(app)
})
