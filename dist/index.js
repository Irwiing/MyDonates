"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var typeorm_1 = require("typeorm");
dotenv_1.default.config();
typeorm_1.createConnection();
var app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(3333);
