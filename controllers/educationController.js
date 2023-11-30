const ObjectId = require('mongodb').ObjectId;

const getEducation = async (req, res) => {
    const collection = req.app.locals.db.collection('education')

    try{
        const results = await collection.find({}).toArray();
        res.json(results).status(200);
    }catch(e){
        console.error(`Error retrieving education: ${e}`);
        res.send(`Error retrieving education: ${e}`).status(500);
    }

}

module.exports = {getEducation};