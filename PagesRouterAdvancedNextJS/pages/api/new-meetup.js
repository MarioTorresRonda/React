import { MongoClient } from 'mongodb'

// api/new-meetup

async function handler(req, res) {
    if ( req.method === 'POST' ) {
        const data = req.body;

        const client = await MongoClient.connect("mongodb+srv://root:1234@react.dhbuqmj.mongodb.net/?retryWrites=true&w=majority&appName=react");
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data)

        console.log( result );

        client.close();

        res.status(201).json({ message: 'Meetup inserted' });
    }
} 

export default handler;