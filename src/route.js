const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');
const boxController = new BoxController();
const fileController = new FileController();

routes.post('/box', boxController.store);
routes.get('/box/:id', boxController.show);
routes.post('/box/:id/file', multer(multerConfig).single('file'), fileController.store);

module.exports = routes;