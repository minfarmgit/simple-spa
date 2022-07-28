import { ModuleRoute } from "../models/module-route.model";
import { Render } from "./render";
import { ComponentInstance } from "../models/component-instance.model";

export class Router {
    public routes: ModuleRoute[] = [];

    private _activeRoute: string = '';
    public get activeRoute(): string { return this._activeRoute };
    public set activeRoute(value: string) { this._activeRoute = value; this.setNewPath(value); };

    private render: Render;
    private component: ComponentInstance | undefined;

    constructor(routes: ModuleRoute[], render: Render) {
        this.routes = routes;
        this.render = render;
        this.setFirstPath();
    }

    private setFirstPath(): void {
        this.setRoute(window.location.pathname);
    }

    private setNewPath(path: string): void {
        this.setRoute(path);
    }

    private setRoute(path: string): void {
        const component: any | undefined = this.routes.find((route: ModuleRoute) => [path, '*'].includes(route.path))?.component;
        if (component) {
            if (this.component) {
                this.component.destroy();
            }
            this.component = new component();
            if (this.component) {
                this.render.renderPage(this.component);
            }
        } else {
            throw new Error('Path not found');
        }
    }

    public navigate(path: string): void {
        this.activeRoute = path;
    }
}