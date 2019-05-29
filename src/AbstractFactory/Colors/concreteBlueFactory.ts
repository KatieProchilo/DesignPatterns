export class ConcreteBlueFactory implements AbstractFactory {
    public provideSynonym(): AbstractSynonym {
        return new ConcreteBlueSynonym();
    }

    public provideExample(): AbstractExample {
        return new ConcreteBlueExample();
    }
}

class ConcreteBlueSynonym implements AbstractSynonym {
    public provideSynonym(): string {
        const blueSynonyms = ["navy", "indigo", "sky blue"];
        const randomIndex = Math.floor(Math.random() * blueSynonyms.length);
        return `Another type of blue is "${blueSynonyms[randomIndex]}".`;
    }
}

class ConcreteBlueExample implements AbstractExample {
    public provideExample(): string {
        const blueObjects = ["blue bird", "blueberry", "sky"];
        const randomIndex = Math.floor(Math.random() * blueObjects.length);
        return `A "${blueObjects[randomIndex]}" is an example of something blue.`;
    }
}
