const express = require('express');
const cors = require('cors');
const root = require('./routes/root.js');
const experiences = require('./routes/api/experiences.js');
const skills = require('./routes/api/skills.js');
const projects = require('./routes/api/projects.js');
const education = require('./routes/api/education.js');

const mongoConn = require('./config/dbConn');
require('./loadEnvironment.js');

async function main(){
    const PORT = process.env.PORT || 5050;
    const app = express();

    const dbConn = await mongoConn();
    app.locals.db = dbConn.db('resume');

    app.use(cors());
    app.use(express.json());
    app.use('/', root);
    app.use('/api/experiences', experiences);
    app.use('/api/skills', skills);
    app.use('/api/projects', projects);
    app.use('/api/education', education);

    app.listen(PORT, ()=>{
        console.log(`Server is running on port: ${PORT}`); 
        });
}

main();