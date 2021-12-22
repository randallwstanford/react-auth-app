import { Server } from "./server/index";
import express from 'express';

const app = express();
const port = 3000;
const server = new Server(app);

server.start(port);