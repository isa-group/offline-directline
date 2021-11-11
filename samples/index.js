require('dotenv').config();

const directline = require("../dist/bridge");
const express = require("express");

const app = express();
directline.initializeRoutes(app, process.env.DIRECTLINE_ENDPOINT, 3001, process.env.BOT_URL);