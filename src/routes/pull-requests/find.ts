import { Application } from 'express'
import { Mongo } from '../../clients/mongo'
import { COLLECTION_PULL_REQUESTS, DATABASE_NAME } from '../../constants/database'
import { ObjectId } from 'mongodb'


export const find = (app: Application) => {
    app.get('/pull-requests/:id', async (req, res) => {
        try {
            const db = Mongo.getInstance().db(DATABASE_NAME)
            const item = await db.collection(COLLECTION_PULL_REQUESTS).findOne({ _id: new ObjectId(req.params.id) })

            if (!item) {
                res.status(404).json({ error: 'Item not found' })

                return
            }

            res.status(200).json(item)
        } catch (err) {
            console.log(err)

            res.status(500).json({ error: 'Failed to fetch item' })
        }
    })
}