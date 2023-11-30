const ObjectId = require('mongodb').ObjectId;

const getSkills = async (req, res) => {
    const collection = req.app.locals.db.collection('skills')

    try{
        const results = await collection.find({}).toArray();
        res.json(results).status(200);
    }catch(e){
        console.error(`Error retrieving skills: ${e}`);
        res.send(`Error retrieving skills: ${e}`).status(500);
    }

}

module.exports = {getSkills};