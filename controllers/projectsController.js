const SecretsClient = require('../utils/GCPSecrets');
const DBQuery = require('../utils/DBQuery');
const { joinProjectsSkills } = require('../utils/dbPipelines');

const getProjects = async (req, res) => {
    const userID = await new SecretsClient().getSecret(process.env.USER_ID);
    const pipeline = joinProjectsSkills(userID);

    const dbQuery = new DBQuery("projects", req, res);
    dbQuery.aggregateCollections(pipeline);

    return;

}

module.exports = { getProjects };