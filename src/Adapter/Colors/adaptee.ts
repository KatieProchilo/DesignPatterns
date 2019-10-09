import { Target } from './target';

export class Adaptee {
    public specificRequest(): string {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}

interface IAdapter {
    request(): string;
}

export class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee
            .specificRequest()
            .split('')
            .reverse()
            .join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}
