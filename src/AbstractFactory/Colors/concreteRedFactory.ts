import {
    AbstractExample,
    AbstractFactory,
    AbstractSynonym,
} from './abstractFactory';

export class ConcreteRedFactory implements AbstractFactory {
    public provideSynonym(): AbstractSynonym {
        return new ConcreteRedSynonym();
    }

    public provideExample(): AbstractExample {
        return new ConcreteRedExample();
    }
}

class ConcreteRedSynonym implements AbstractSynonym {
    public provideSynonym(): string {
        const redSynonyms = ['scarlett', 'burgundy'];
        const randomIndex = Math.floor(Math.random() * redSynonyms.length);
        return `Another type of red is "${redSynonyms[randomIndex]}".`;
    }
}

class ConcreteRedExample implements AbstractExample {
    public provideExample(): string {
        const redObjects = ['fox', 'barn'];
        const randomIndex = Math.floor(Math.random() * redObjects.length);
        return `A "${redObjects[randomIndex]}" is an example of something red.`;
    }
}
