const MongoClient = require('mongodb').MongoClient;

const mongoConn = async () => {
    const connectionString = process.env.ATLAS_URI || '';

    const client = new MongoClient(connectionString, { useNewURLParser: true });

    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client;
    }catch(e){
        console.error(`Error connecting to MongoDB: ${e}`);
    }

}

module.exports = mongoConn;