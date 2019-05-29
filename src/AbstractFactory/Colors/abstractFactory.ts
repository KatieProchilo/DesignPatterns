interface AbstractFactory {
    provideSynonym(): AbstractSynonym;

    provideExample(): AbstractExample;
}

interface AbstractSynonym {
    provideSynonym(): string;
}

interface AbstractExample {
    provideExample(): string;
}