var express = require('express');
var router = express.Router();
var imageStreamController = require('../controllers/image-stream-controller');

//router.get('/:id', videoStreamController.renderVideo);
router.get('/:file_name', imageStreamController.streamImage)

module.exports = router;