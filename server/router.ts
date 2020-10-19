import { Request, Response } from "express";
import { Picture } from "./database";

export interface IRouter {
    AddRoute(route: any): void;
}

export class RoutingEngine {
    constructor(private routing: IRouter[] = new Array<IRouter>()){} 

    public Add<T1 extends IRouter>(routing: (new() => T1), route: any) {
        const routed = new routing();
        routed.AddRoute(route);
        this.routing.push(routed);
    }
}

export class AddPictureRouter implements IRouter {
    public AddRoute(route: any): void {
        route.post('/add', (req: Request, res: Response) => {
            const picture = new Picture(req.body);
            picture.save((err, picture) => {
                if (err) {
                    res.send(err);
                }
                res.json(picture);
            });
        });
    }
}

export class GetPictureRouter implements IRouter {
    public AddRoute(route: any): void {
        route.get('/get', (req: Request, res: Response) => {
            Picture.distinct("_id", (err, pic) => {
                if (err) {
                    res.send(err);
                }
                res.send(pic);
            });
        });
    }
}

export class FindByIdRouter implements IRouter {
    public AddRoute(route: any):void {
        route.get('/id/:id', (req: Request, res: Response) => {
            Picture.findOne({_id: req.params.id}, '-_id', (err, pic) => {
                if (err) {
                    res.send(err);
                }
                res.json(pic);
            });
        });
    }
}
