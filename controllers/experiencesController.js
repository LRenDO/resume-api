const SecretsClient = require('../utils/GCPSecrets');
const DBQuery = require('../utils/DBQuery');
const { joinExperiencesSkills } = require('../utils/dbPipelines');

const getExperiences = async (req, res) => {
    const userID = await new SecretsClient().getSecret(process.env.USER_ID);
    const pipeline = joinExperiencesSkills(userID);

    const dbQuery = new DBQuery("experiences", req, res);
    dbQuery.aggregateCollections(pipeline);

    return;

};

module.exports = { getExperiences };