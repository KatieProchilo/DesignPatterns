import { ColorProduct, ConcreteBlue, ConcreteRed } from './product';

export abstract class Creator {
    public abstract factory(): ColorProduct;

    public someOperation(): string {
        // Call the factory method to create a Product object.
        const product = this.factory();
        // Now, use the product.
        return `Creator: ${product.provideExample()} ${product.provideSynonym()}`;
    }
}

export class ConcreteRedCreator extends Creator {
    public factory(): ColorProduct {
        return new ConcreteRed();
    }
}

export class ConcreteBlueCreator extends Creator {
    public factory(): ColorProduct {
        return new ConcreteBlue();
    }
}
