const ObjectId = require('mongodb').ObjectId;
const SecretsClient = require('../utils/GCPSecrets');
const DBQuery = require('../utils/DBQuery');

const getEducation = async (req, res) => {
    const userID = await new SecretsClient().getSecret(process.env.USER_ID);

    const query = {
            user_id: new ObjectId(userID),
        };
    const dbQuery = new DBQuery("education", req, res);
    dbQuery.getCollection(query);
    
    return;
}

module.exports = {getEducation};