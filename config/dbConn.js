const MongoClient = require('mongodb').MongoClient;
const SecretsClient = require('../utils/GCPSecrets');

const mongoConn = async () => {
    try {
        // Get GCP Secret
        const connectionString = await new SecretsClient().getSecret(process.env.ATLAS_URI);

        // Connect to MongoDB
        const client = new MongoClient(connectionString, { useNewURLParser: true });
        await client.connect();
        console.log('Connected to MongoDB');
        return client;
    }catch(e){
        console.error(`Error connecting to Secret Manager and MongoDB: ${e}`);
    }

}

module.exports = mongoConn;