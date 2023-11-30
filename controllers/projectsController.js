const ObjectId = require('mongodb').ObjectId;

const getProjects = async (req, res) => {
    const collection = req.app.locals.db.collection('projects')

    try{
        const results = await collection.find({}).toArray();
        res.json(results).status(200);
    }catch(e){
        console.error(`Error retrieving projects: ${e}`);
        res.send(`Error retrieving projects: ${e}`).status(500);
    }

}

module.exports = {getProjects};