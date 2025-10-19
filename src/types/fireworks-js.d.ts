declare module "fireworks-js" {
  export class Fireworks {
    constructor(container: HTMLElement, options?: any);
    start(): void;
    stop(): void;
  }
}