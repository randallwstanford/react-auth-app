import express from 'express';
import Server from './server/index';

const app = express();
const port = 3000;
const server = new Server(app);

server.start(port);
