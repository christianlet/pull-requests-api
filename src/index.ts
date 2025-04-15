import express from 'express'
import cors from 'cors'
import pullRequest from './routes/pull-requests'
import users from './routes/users'
import releases from './routes/releases'

const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// CRUD Routes
pullRequest(app)
users(app)
releases(app)

export default app
