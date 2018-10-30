const path = require('path');
const fs = require('fs');
const url = require('url');
const handleDb = require('../db/handle-db');

function getFile(file_name, callback){
    fs.readFile(path.resolve(process.env.FILE_UPLOAD_PATH, file_name), callback);
}

function streamVideoFile(req, res, file_path){
    res.sendFile(file_path);
}

module.exports.streamImage = function(req, res) {

    const file_name = req.params.file_name;
    streamVideoFile(req, res, path.resolve(process.env.FILE_UPLOAD_PATH, file_name));


}