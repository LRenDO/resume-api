const ObjectId = require('mongodb').ObjectId;
const SecretsClient = require('../utils/GCPSecrets');
const DBQuery = require('../utils/DBQuery');

const getBios = async (req, res) => {
    const userID = await new SecretsClient().getSecret(process.env.USER_ID);

    const query = {
            user_id: new ObjectId(userID),
            default: true
        };
    const dbQuery = new DBQuery("bios", req, res);
    dbQuery.getCollection(query);

}

module.exports = {getBios};