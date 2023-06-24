const createProject = require('../models/create_project');

module.exports.home = async function(req, res){
    console.log(req.body)
    try {
        const projects = await createProject.find({}).sort('-createdAt')
        console.log("project******",projects)
        return res.render('home',{
            title: 'Issue tracker | Home',
            projects
    
        })
        
    } catch (error) {
        console.log("Error", err);
        return;
        
    }
}

