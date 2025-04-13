import { Express } from 'express-serve-static-core'
import { COLLECTION_PULL_REQUESTS, DATABASE_NAME } from '../../constants/database'
import { Mongo } from '../../clients/mongo'
import { ObjectId } from 'mongodb'

export const update = (app: Express) => {
    app.put('/pull-requests/:id', async (req, res) => {
        try {
            const db = Mongo.getInstance().db(DATABASE_NAME)
            const result = await db.collection(COLLECTION_PULL_REQUESTS).updateOne(
                { _id: new ObjectId(req.params.id) },
                { $set: req.body }
            )

            if (result.matchedCount === 0) {
                res.status(404).json({ error: 'Item not found' })

                return
            }

            res.status(200).json(result)
        } catch (err) {
            console.log(err)

            res.status(500).json({ error: 'Failed to update item' })
        }
    })
}