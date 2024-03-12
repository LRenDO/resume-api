const ObjectId = require('mongodb').ObjectId;
const SecretsClient = require('../utils/GCPSecrets');
const DBQuery = require('../utils/DBQuery');

const getProjects = async (req, res) => {
    const userID = await new SecretsClient().getSecret(process.env.USER_ID);

    const query = {
            user_id: new ObjectId(userID),
        };
    const options = {sort: {'priority': 1}};
    const dbQuery = new DBQuery("projects", req, res);

    dbQuery.getCollection(query, options);

    return;

}

module.exports = {getProjects};