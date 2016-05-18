var Project = require('./project.model');
var _ = require('lodash');

exports.findAllProjects = function(req, res) {

    Project.find({}).sort({
        created: -1
    }).exec(function(err, projects){
        if(err){
            return res.status(500).send(err);
        }
        return res.status(200).send(projects);
    });
};

exports.createProject = function(req, res){

    var name = req.body.name;
    var description = req.body.description;
    var link = req.body.link;

    if(_.isEmpty(name)){
        return res.status(422).send('InvalidParam');
    }

    var project = new Project({
        name: name,
        description: description,
        link: link,
        created: new Date().toISOString()
    });
    project.save(function(err){
        if(err){
            return res.status(500).send(err);
        }
        return res.status(201).send();
    });
};

exports.updateProject = function(req, res){
    var id = req.body._id;
    var updateName = req.body.name;
    var updateLink = req.body.link;
    var UpdateDescription = req.body.description;

    Project.findById(id, function(err, project){
        project.name = updateName;
        project.description = UpdateDescription;
        project.link = updateLink;
        project.save(function(err){
            if(err) return res.status(500).send(err);
            return res.status(201).send();
        });
    });
};

exports.destoryProject = function(req, res){
    Project.findByIdAndRemove(req.params.id, function(err) {
        if(err) return res.send(500, err);
        return res.send(204);
    });
};
