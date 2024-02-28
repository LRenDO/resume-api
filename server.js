const express = require('express');
const cors = require('cors');
const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');
const root = require('./routes/root.js');
const bios = require('./routes/api/bios.js');
const experiences = require('./routes/api/experiences.js');
const skills = require('./routes/api/skills.js');
const projects = require('./routes/api/projects.js');
const education = require('./routes/api/education.js');
const mongoConn = require('./config/dbConn.js');
const authConfig = require('./config/authConfig.js')
require('./loadEnvironment.js');


async function main(){
    const PORT = process.env.PORT || 5050;
    const app = express();

    const dbConn = await mongoConn();
    app.locals.db = dbConn.db('resume');

    const config = await authConfig();
    const jwtCheck = auth(config);

    app.use(cors());
    app.use(express.json());
    app.use('/api', root);
    app.use('/api/bios', bios);
    app.use('/api/experiences', jwtCheck, experiences);
    app.use('/api/skills', jwtCheck, skills);
    app.use('/api/projects', jwtCheck, projects);
    app.use('/api/education', jwtCheck, education);

    app.listen(PORT, ()=>{
        console.log(`Server is running on port: ${PORT}`); 
        });
}

main();