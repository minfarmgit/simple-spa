import { Component } from "../commons/component";

export interface ModuleRoute {
    path: string;
    component?: Component;
    redirectTo?: string;
}