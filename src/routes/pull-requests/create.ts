import { Express } from 'express-serve-static-core'
import { COLLECTION_PULL_REQUESTS, DATABASE_NAME } from '../../constants/database'
import { Mongo } from '../../clients/mongo'

export const create = (app: Express) => {
    app.post('/pull-requests', async (req, res) => {
        try {
            const db = Mongo.getInstance().db(DATABASE_NAME)
            const result = await db.collection(COLLECTION_PULL_REQUESTS).insertOne(req.body)
            res.status(201).json(result)
        } catch (err) {
            console.log(err)

            res.status(500).json({ error: 'Failed to create item' })
        }
    })
}