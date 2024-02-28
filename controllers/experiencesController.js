const ObjectId = require('mongodb').ObjectId;
const SecretsClient = require('../utils/GCPSecrets');

const getExperiences = async (req, res) => {
    const collection = req.app.locals.db.collection('experiences');

    try{
        // Create Query
        const userID = await new SecretsClient().getSecret(process.env.USER_ID);
        const query = {user_id: {
            $eq: new ObjectId(userID)
        }};
        const options = {sort: {'endDate': -1}, projection: {_id: 0}};

        // Get Experiences
        const results = await collection.find(query, options).toArray();
        res.json(results).status(200);
    }catch(e){
        console.error(`Error retrieving experiences: ${e}`);
        res.send(`Error retrieving experiences: ${e}`).status(500);
    }
};

module.exports = {getExperiences};