import { MongoClient } from 'mongodb'
import { MONGO_URI } from '../constants/database'


export class Mongo {
    private static instance: MongoClient

    private constructor() {}

    public static getInstance() {
        if(!this.instance) {
            this.instance = new MongoClient(MONGO_URI)
        }

        return this.instance
    }
}
