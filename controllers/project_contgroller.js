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
            req.flash("success", "Project Created");
            return res.redirect('back');
        }
        req.flash("success", "Project Created");
        return res.redirect('back');

    } catch (error) {
        req.flash("error", error);
        return res.redirect('back');

    }
}

module.exports.delete = async function (req, res) {
    try {
        let deletedProject = await createProject.findByIdAndDelete(req.query.id)
        if (deletedProject) {
            if (req.xhr) {
                return res.status(200).json({
                    data: {
                        project_id: req.query.id
                    },
                    message: "project Deleted"
                });
            }
            req.flash("success", "Project Deleted")
            return res.redirect('back');
        }
    } catch (error) {
        req.flash("error", error)
        return res.redirect('back');
    }
}

module.exports.projectDetails = async function (req, res) {
    try {
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
            req.flash("success", "Issue Created")
            return res.redirect('back');
        } else {
            req.flash("success", "Issue Created")
            return res.redirect('back');
        }

    } catch (error) {
        req.flash("error", error);
        return res.redirect('back');

    }
}

module.exports.deleteIssue = async function (req, res) {
    try {
        let deleteData = await createIssue.findByIdAndDelete(req.query.id);
        if (deleteData) {
            req.flash("success", "Issue Deleted");
            return res.redirect('back');      
                
        }
        req.flash('success', 'Issue Deleted');
        return res.redirect('back')

    } catch (error) {
        req.flash("error", error);
        return res.redirect('back');
    }
}