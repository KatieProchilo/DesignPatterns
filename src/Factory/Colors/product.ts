export interface ColorProduct {
    operation(): string;
}

export class ConcreteBlue implements ColorProduct {
    public operation(): string {
        return '{Result of the ConcreteBlue}';
    }
}

export class ConcreteRed implements ColorProduct {
    public operation(): string {
        return '{Result of the ConcreteRed}';
    }
}