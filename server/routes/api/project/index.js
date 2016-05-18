'use strict'

var express = require('express'),
    controller = require('./project.controller');

var router = express.Router();

router.get('/', controller.findAllProjects);
router.post('/', controller.createProject);
router.put('/:id', controller.updateProject);
router.delete('/:id', controller.destoryProject);

module.exports = router;
