const createProject = require('../models/create_project');

module.exports.home = async function(req, res){
    return res.render('home',{
        title: 'Issue tracker | Home'
    })
}

module.exports.createSesstion = async function(req,res){
    const Project = await createProject.find({});
    console.log('Project',req.body);
}