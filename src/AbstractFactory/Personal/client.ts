import { ConcreteBlueFactory, ConcreteRedFactory } from './';

/**
 * The client code works with factories and products only through abstract
 * types: AbstractFactory and AbstractProduct. This lets you pass any factory
 * or product subclass to the client code without breaking it.
 */
const clientCode = (factory: AbstractFactory) => {
    const someColorSynonym = factory.provideSynonym();
    const someColorExample = factory.provideExample();

    console.log(someColorSynonym.provideSynonym());
    console.log(someColorExample.provideExample());
}

export const abstractFactoryTest = () => {
    console.log('\n\n##### PERSONAL - ABSTRACT FACTORY TEST #####\n');
    console.log('Notice the same client code is called for');
    console.log('both the RED and BLUE factories. This is a');
    console.log('strong sign that the Abstract Factory');
    console.log('pattern is being used.\n');

    console.log("\x1b[31m", 'Client: Testing client code with the RED factory type...', "\x1b[0m");
    clientCode(new ConcreteRedFactory());


    console.log("\x1b[34m", '\nClient: Testing the same client code with the BLUE factory type...', "\x1b[0m");
    clientCode(new ConcreteBlueFactory());
}