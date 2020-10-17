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
        route.post('/add/', (req: Request, res: Response) => {

        });
    }
}
