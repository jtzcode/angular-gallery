import express, { request } from "express";
import bodyParser from 'body-parser';
import cors from 'cors';


export class Server {
    constructor(private port:  number = 3000,  private app: any = express()) {

    }

    public Start(): void {
        this.app.use(bodyParser.json({limit: '100mb'}));
        this.app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
        this.OnStart();
        this.app.listen(this.port, () => console.log('Express server running on port ${this.port}'));
    }

    protected OnStart(): void {
        this.app.get('/', (request: any, response: any) => {
            response.send('Hello from server.');
        });
    }

    public WithCORSSupport(): Server {
        this.app.use(cors());
        return this;
    }
}