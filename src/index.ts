import express from 'express'
import cors from 'cors'
import pullRequest from './routes/pull-requests'
import users from './routes/users'
import releases from './routes/releases'

const app = express()
const PORT = 3000

// Middleware
app.use(express.json())
app.use(cors())

// CRUD Routes

// Start server
app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`)

    pullRequest(app)
    users(app)
    releases(app)
})

export default app
