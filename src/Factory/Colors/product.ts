export interface ColorProduct {
    provideSynonym(): string;
    provideExample(): string;
}

export class ConcreteBlue implements ColorProduct {
    public provideSynonym(): string {
        const blueSynonyms = ["navy", "indigo", "sky blue"];
        const randomIndex = Math.floor(Math.random() * blueSynonyms.length);
        return `Another type of blue is "${blueSynonyms[randomIndex]}".`;
    }

    public provideExample(): string {
        const blueObjects = ["blue bird", "blueberry", "sky"];
        const randomIndex = Math.floor(Math.random() * blueObjects.length);
        return `A "${blueObjects[randomIndex]}" is an example of something blue.`;
    }
}

export class ConcreteRed implements ColorProduct {
    public provideSynonym(): string {
        const redSynonyms = ["scarlett", "burgundy"];
        const randomIndex = Math.floor(Math.random() * redSynonyms.length);
        return `Another type of red is "${redSynonyms[randomIndex]}".`;
    }

    public provideExample(): string {
        const redObjects = ["fox", "barn"];
        const randomIndex = Math.floor(Math.random() * redObjects.length);
        return `A "${redObjects[randomIndex]}" is an example of something red.`;
    }
}