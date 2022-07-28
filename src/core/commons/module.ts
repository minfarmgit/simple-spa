import { ModuleRoute } from "../models/module-route.model";
import { Router } from "../utils/router";
import { Render } from "../utils/render";

export class Module {
    public routes: ModuleRoute[] = [];

    private router!: Router;
    private render!: Render;

    init(): void {
        this.render = new Render();
        this.router = new Router(this.routes, this.render);
    }
}