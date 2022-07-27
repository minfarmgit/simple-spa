import { Module } from "../core/commons/module";
import { ModuleInstance } from "../core/models/module-instance.model";
import { ModuleRoute } from "../core/models/module-route.model";
import { HomeComponent } from "./home/home.component";

export class AppModule extends Module implements ModuleInstance {
    routes: ModuleRoute[] = [
        {
            path: '/',
            component: HomeComponent,
        },
        {
            path: '*',
            redirectTo: '/',
        }
    ];
}