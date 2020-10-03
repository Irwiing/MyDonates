import dotenv from 'dotenv'
import 'reflect-metadata'
import express from 'express'
import routes from './routes'

import {createConnection} from "typeorm";

dotenv.config();

createConnection();
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

