const ObjectId = require('mongodb').ObjectId;

class DBQuery {
    constructor(collectionName, req, res){
        this.collectionName = collectionName;
        this.req = req;
        this.res = res;
    }

    // getCollection
    // Parameters: 
    //      name
    // Returns: 
    async getCollection(){
        const collection = this.req.app.locals.db.collection(this.collectionName);
        console.log(`query: ${this.req.query.userID}`); // TODO DELETE
        // Create Query
        const query = {
            user_id: new ObjectId(this.req.query.userID),
            default: true
        };

        try{
            const results = await collection.find(query).toArray();
            this.res.json(results).status(200);
        }catch(e){
            console.error(`Error retrieving ${this.collectionName}: ${e}`);
            this.res.send(`Error retrieving ${this.collectionName}: ${e}`).status(500);
        }
    }

}

module.exports = DBQuery;