import express, { request } from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import { Mongo } from "./database";
import { RoutingEngine } from "./router";


export abstract class Server {
    private router: any;
    constructor(private port: number = 3000,  private app: any = express(),
        private mongo: Mongo = new Mongo(), private routeEngine: RoutingEngine = new RoutingEngine()) {

    }

    protected abstract AddRouting(routeEngine: RoutingEngine, route: any): void;

    public Start(): void {
        this.app.use(bodyParser.json({limit: '100mb'}));
        this.app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
        this.mongo.Connect();
        this.router = express.Router();
        this.AddRouting(this.routeEngine, this.router);
        this.app.use(this.router);
        this.OnStart();
        this.app.listen(this.port, () => console.log('Express server running on port ${this.port}'));
    }

    protected OnStart(): void {
    }

    public WithCORSSupport(): Server {
        this.app.use(cors());
        return this;
    }
}