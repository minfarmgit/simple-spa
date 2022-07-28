export class Component {
    onInit?(): void;
    onDestroy?(): void;

    public init(): void {
        if (this.onInit) { this.onInit() }
    };

    public destroy(): void {
        if (this.onDestroy) { this.onDestroy() }
    };
}