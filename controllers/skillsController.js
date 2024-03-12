const ObjectId = require('mongodb').ObjectId;
const SecretsClient = require('../utils/GCPSecrets');
const DBQuery = require('../utils/DBQuery');

const getSkills = async (req, res) => {
    const sub = req.auth.payload.sub; // TODO DELETE AFTER ADDING SUB TO ALL CONTROLLERS
    
    const userID = await new SecretsClient().getSecret(process.env.USER_ID);

    const query = {
            user_id: new ObjectId(userID),
        };
    const dbQuery = new DBQuery("skills", req, res);
    dbQuery.getCollection(query);

}

module.exports = {getSkills};