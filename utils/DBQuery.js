class DBQuery {
    constructor(collectionName, req, res){
        this.collectionName = collectionName;
        this.req = req;
        this.res = res;
    }

    // getCollection
    //
    // Sends request for Mongo DB collection based on query and options
    // and stores result in res class member.
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

    // aggregateCollections
    //
    // Sends request for Mongo DB to get aggregated collections based on 
    // pipeline passed.
    // Parameters: 
    //      pipeline: (Array of Objects) MongoDb aggregation pipeline
    
    async aggregateCollections(pipeline){
        const collection = this.req.app.locals.db.collection(this.collectionName);

        try{
            const results = await collection.aggregate(pipeline).toArray();
            this.res.json(results).status(200);
        }catch(e){
            console.error(`Error retrieving aggregation ${this.collectionName}: ${e}`);
            this.res.send(`Error retrieving aggregation ${this.collectionName}: ${e}`).status(500);
        }

        return;
    }

}

module.exports = DBQuery;