const Science = require("./models/scienceModel.js");
const catchAsync = require("../utils/catchAsync");
const stream = require("stream");
const multer = require("multer");
const upload = multer();
const { google } = require("googleapis");
