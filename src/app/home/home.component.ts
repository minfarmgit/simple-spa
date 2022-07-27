import { Component } from "../../core/commons/component";
import { ComponentInstance } from "../../core/models/component-instance.model";
import html from "home.component.html";
import scss from "./home.component.scss";

export class HomeComponent extends Component implements ComponentInstance {
    template = html;
    styles = scss;

    constructor() {
        super();
        console.log('Home Component Constructor');
    }
}