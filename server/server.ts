/* eslint-disable no-console */
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

export default class Server {
  private app: Express;

  constructor(app: Express) {
    this.app = app;

    this.app.use(express.static(path.join(__dirname, '../', 'client', 'dist')));

    // Enable Cors
    this.app.use((req, resp, next) => next(), cors({ maxAge: 84600 }));

    this.app.use('/login', (req, res) => {
      res.send({
        token: 'test123',
      });
    });

    this.app.get('/api', (req: Request, res: Response): void => {
      res.send('You have reached the API!');
    });

    this.app.get('*', (req: Request, res: Response): void => {
      res.sendFile(`${path.resolve('./')}/client/dist/index.html`);
    });
  }

  public start(port: number): void {
    this.app.listen(port, () => console.log(`🧠 Server listening on port ${port}!`));
  }
}
