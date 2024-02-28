const ObjectId = require('mongodb').ObjectId;
const SecretsClient = require('../utils/GCPSecrets');

const getProjects = async (req, res) => {
    const collection = req.app.locals.db.collection('projects')

    // Create Query
    const userID = await new SecretsClient().getSecret(process.env.USER_ID);
    const query = {user_id: {
        $eq: new ObjectId(userID)
    }};
    const options = {sort: {'priority': 1}};

    try{
        const results = await collection.find(query, options).toArray();
        res.json(results).status(200);
    }catch(e){
        console.error(`Error retrieving projects: ${e}`);
        res.send(`Error retrieving projects: ${e}`).status(500);
    }

}

module.exports = {getProjects};