require('dotenv').config();

const directline = require("../dist/bridge");
const express = require("express");

const app = express();
directline.initializeRoutes(app, process.env.DIRECTLINE_ENDPOINT, process.env.DIRECTLINE_PORT, process.env.BOT_URL);