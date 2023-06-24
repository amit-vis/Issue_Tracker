const createProject = require('../models/create_project');
const createIssue = require('../models/create_issue');

module.exports.createSession = async function(req, res){
    try {
        const create = await createProject.create({
            description: req.body.description,
            name: req.body.name,
            author: req.body.author
        });
        if(create){
            console.log("********", create)
            return('back');
        }
        
    } catch (error) {
        console.log("Error", error);
        return
        
    }
}

module.exports.delete = async function(req, res){
    try {
        let deletedProject = await createProject.findByIdAndDelete(req.query.id)
        if(deletedProject){
            console.log("hello delete")
            return res.redirect('back');
        }
    } catch (error) {
        console.log("Error", error);
        return
    }
}

module.exports.projectDetails = async function(req, res){
    try {
        return res.render('project_page', {
            title: "Project Page"
        })
    } catch (error) {
        
    }
}