const ObjectId = require('mongodb').ObjectId;

const getExperiences = async (req, res) => {
    const collection = req.app.locals.db.collection('experiences');
    const query = {user_id: {$eq: new ObjectId(process.env.USER_ID)}};
    const options = {sort: {'endDate': -1}, projection: {_id: 0}};

    try{
        const results = await collection.find(query, options).toArray();
        res.json(results).status(200);
    }catch(e){
        console.error(`Error retrieving experiences: ${e}`);
        res.send(`Error retrieving experiences: ${e}`).status(500);
    }
};

module.exports = {getExperiences};