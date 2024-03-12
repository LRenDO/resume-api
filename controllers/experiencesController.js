const ObjectId = require('mongodb').ObjectId;
const SecretsClient = require('../utils/GCPSecrets');
const DBQuery = require('../utils/DBQuery');

const getExperiences = async (req, res) => {
    const userID = await new SecretsClient().getSecret(process.env.USER_ID);

    const query = {
            user_id: new ObjectId(userID),
        };
    const options = {sort: {'endDate': -1}, projection: {_id: 0}};
    const dbQuery = new DBQuery("experiences", req, res);

    dbQuery.getCollection(query, options);

    return;

};

module.exports = {getExperiences};