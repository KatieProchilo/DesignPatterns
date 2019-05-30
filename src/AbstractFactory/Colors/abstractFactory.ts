export interface AbstractFactory {
    provideSynonym(): AbstractSynonym;

    provideExample(): AbstractExample;
}

export interface AbstractSynonym {
    provideSynonym(): string;
}

export interface AbstractExample {
    provideExample(): string;
}