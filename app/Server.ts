import { Express, Request, Response } from "express";

export class Server {

  private app: Express;

  constructor(app: Express) {
    this.app = app;

    this.app.get("/", (req: Request, res: Response): void => {
      res.send("Home page!");
    })
  };

  public start(port: number): void {
    this.app.listen(port, () => console.log(`🧠 Server listening on port ${port}!`));
  };
}