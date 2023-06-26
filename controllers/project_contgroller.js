const createProject = require('../models/create_project');
const createIssue = require('../models/create_issue');
const mongoose = require('mongoose');

module.exports.createSession = async function (req, res) {
    try {
        const create = await createProject.create({
            description: req.body.description,
            name: req.body.name,
            author: req.body.author
        });
        if (create) {
            console.log("********", create)
            return ('back');
        }

    } catch (error) {
        console.log("Error", error);
        return

    }
}

module.exports.delete = async function (req, res) {
    try {
        let deletedProject = await createProject.findByIdAndDelete(req.query.id)
        if (deletedProject) {
            console.log("hello delete")
            return res.redirect('back');
        }
    } catch (error) {
        console.log("Error", error);
        return
    }
}

module.exports.projectDetails = async function (req, res) {
    try {
        // const projectId = req.params.id;
        // if (!mongoose.Types.ObjectId.isValid(projectId)) {
        //     // Invalid ObjectId format
        //     return res.redirect('back');
        // }
        const project = await createProject.findById(req.params.id).populate({
            path: "issues",
        });
        if (project) {
            return res.render('project_page', {
                title: "Project Page",
                project
            });
        }
        return res.redirect('back');
    } catch (error) {
        console.log("Error", error);
    }
}

module.exports.createIssueSession = async function (req, res) {
    try {
        let project = await createProject.findById(req.params.id)
        if (project) {
            let Issue = await createIssue.create({
                name: req.body.name,
                description: req.body.description,
                author: req.body.author,
                labels: req.body.labels
            });
            project.issues.push(Issue);
            if (!(typeof req.body.labels === "string")) {
                for (let labels of req.body.labels) {
                    let isPresent = project.labels.find((obj) => obj == label)
                    if (!isPresent) {
                        project.labels.push(label)
                    }
                }
            } else {
                let isPresent = project.labels.find((obj) => obj == req.body.labels)
                if (!isPresent) {
                    project.labels.push(req.body.labels)
                }
            }
            await project.save();
            return res.redirect('back');
        } else {
            return res.redirect('back');
        }

    } catch (error) {
        console.log("Error", err);
        return

    }
}

module.exports.deleteIssue = async function (req, res) {
    console.log(req)
    try {
        let Issue = await createIssue.findByIdAndDelete(req.query.id)
        console.log("issue delete function",Issue)
        if (Issue) {
            return res.redirect('back');
        }

    } catch (error) {
        console.log("Error", error);
        return

    }
}