import { Application } from 'express'
import { MongoDb } from '../../clients/mongo-db'

interface Params {
    size?: string
    page?: string
}

export const getAll = (app: Application) => {
    app.get('/pull-requests', async (req, res) => {
        const params = req.query as Params
        const size = params.size ? parseInt(params.size) : 50
        const page = params.page ? parseInt(params.page) : 1

        try {
            const collection = MongoDb.getCollection('pull-requests')
            const items = await collection.find()
                .limit(size)
                .skip((page - 1) * size)
                .toArray()

            res.status(200).json({
                items
            })
        } catch (err) {
            console.log(err)

            res.status(500).json({ error: 'Failed to fetch items' })
        }
    })
}