
const ObjectId = require('mongodb').ObjectId;

function joinSkills(userID){
  const pipeline = [     
    {
      '$match': {
          'user_id': new ObjectId(userID)
      }
    },   
    {
      '$lookup': {
        'from': 'skills', 
        'localField': 'skills', 
        'foreignField': '_id', 
        'as': 'skills'
      }
    }
  ];

  return pipeline;
}

function joinProjectsSkills(userID) {
  const pipeline = joinSkills(userID);
  pipeline.push({ '$sort': { 'priority': 1 }});

  return pipeline;
  }
  
function joinExperiencesSkills(userID) {
  const pipeline = joinSkills(userID);
  pipeline.push({ '$sort': { 'endDate': -1 }});

  return pipeline;
}

module.exports = { joinSkills, joinProjectsSkills, joinExperiencesSkills };