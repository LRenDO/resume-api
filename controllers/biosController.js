//const ObjectId = require('mongodb').ObjectId;
//const SecretsClient = require('../utils/GCPSecrets');
const DBQuery = require('../utils/DBQuery');

const getBios = async (req, res) => {

    console.log(`query: ${req.query.userID}`); // TODO DELETE

    const dbQuery = new DBQuery("bios", req, res);
    dbQuery.getCollection();

    // const collection = req.app.locals.db.collection('bios');
    
    // Create Query
    // const userID = await new SecretsClient().getSecret(process.env.USER_ID);
    // const query = {
    //     user_id: new ObjectId(query.userID),
    //     default: true
    // };

    // try{
    //     const results = await collection.find(query).toArray();
    //     res.json(results).status(200);
    // }catch(e){
    //     console.error(`Error retrieving bios: ${e}`);
    //     res.send(`Error retrieving bios: ${e}`).status(500);
    // }

}

module.exports = {getBios};