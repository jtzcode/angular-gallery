import { AddPictureRouter, FindByIdRouter, GetPictureRouter, RoutingEngine } from "./router";
import { Server } from "./server";

export class GalleryServer extends Server {
    protected AddRouting(routeEngine: RoutingEngine, router: any): void {
        routeEngine.Add(AddPictureRouter, router);
        routeEngine.Add(GetPictureRouter, router);
        routeEngine.Add(FindByIdRouter, router);
    }
}

new GalleryServer(3000).WithCORSSupport().Start();