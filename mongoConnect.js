require('./loadEnvironment.js');

async function main() {
    const MongoClient = require('mongodb').MongoClient;
    const connectionString = process.env.ATLAS_URI || '';

    const client = new MongoClient(connectionString, { useNewUrlParser: true });
    await client.connect();
    const collection = client.db('resume').collection('experiences').find();
    const results = await collection.toArray();
    console.log(results);

    client.close();

  }
  main().catch(console.error);