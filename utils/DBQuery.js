class DBQuery {
    constructor(collectionName, req, res){
        this.collectionName = collectionName;
        this.req = req;
        this.res = res;
    }

    // getCollection
    // Parameters: 
    //      query: (Object) MongoDb query
    //      options: (Object) MongoDb query options 
    async getCollection(query, options = {}){
        const collection = this.req.app.locals.db.collection(this.collectionName);

        try{
            const results = await collection.find(query, options).toArray();
            this.res.json(results).status(200);
        }catch(e){
            console.error(`Error retrieving ${this.collectionName}: ${e}`);
            this.res.send(`Error retrieving ${this.collectionName}: ${e}`).status(500);
        }

        return;
    }

}

module.exports = DBQuery;