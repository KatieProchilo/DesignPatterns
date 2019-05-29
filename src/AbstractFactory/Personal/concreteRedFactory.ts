/**
 * Concrete Factories produce a family of products that belong to a single
 * variant. The factory guarantees that resulting products are compatible. Note
 * that signatures of the Concrete Factory's methods return an abstract product,
 * while inside the method a concrete product is instantiated.
 */
export class ConcreteRedFactory implements AbstractFactory {
    public provideSynonym(): AbstractSynonym {
        return new ConcreteRedSynonym();
    }

    public provideExample(): AbstractExample {
        return new ConcreteRedExample();
    }
}

/**
 * Concrete Products are created by corresponding Concrete Factories.
 */
class ConcreteRedSynonym implements AbstractSynonym {
    public provideSynonym(): string {
        const redSynonyms = ["scarlett", "burgundy"];
        const randomIndex = Math.floor(Math.random() * redSynonyms.length);
        return `Another type of red is "${redSynonyms[randomIndex]}".`;
    }
}

/**
 * Concrete Products are created by corresponding Concrete Factories.
 */
class ConcreteRedExample implements AbstractExample {
    public provideExample(): string {
        const redObjects = ["fox", "barn"];
        const randomIndex = Math.floor(Math.random() * redObjects.length);
        return `A "${redObjects[randomIndex]}" is an example of something red.`;
    }
}