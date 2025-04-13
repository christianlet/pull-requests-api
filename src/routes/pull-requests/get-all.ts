import { Application } from 'express'
import { Mongo } from '../../clients/mongo'
import { COLLECTION_PULL_REQUESTS, DATABASE_NAME } from '../../constants/database'


export const getAll = (app: Application) => {
    app.get('/pull-requests', async (req, res) => {
        try {
            const db = Mongo.getInstance().db(DATABASE_NAME)
            const items = await db.collection(COLLECTION_PULL_REQUESTS).find().toArray()
            res.status(200).json(items)
        } catch (err) {
            console.log(err)

            res.status(500).json({ error: 'Failed to fetch items' })
        }
    })
}