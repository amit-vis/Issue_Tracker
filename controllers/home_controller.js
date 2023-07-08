// require the createProject from the models
const createProject = require('../models/create_project');

// code to render the home page.
module.exports.home = async function(req, res){
    try {
        const projects = await createProject.find({}).sort('-createdAt')
        return res.render('home',{
            title: 'Issue tracker | Home',
            projects
    
        })
        
    } catch (error) {
        console.log("Error", error);
        return;
        
    }
}

