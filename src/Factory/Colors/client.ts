import { ConcreteBlueCreator, ConcreteRedCreator, Creator } from './creator';

const clientCode = (creator: Creator) => {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}

export const factoryTest = () => {
    console.log('\n\n##### COLORS - FACTORY TEST #####\n');

    console.log("\x1b[31m", 'App: Launched with the ConcreteBlueCreator.', "\x1b[0m");
    clientCode(new ConcreteBlueCreator());
    console.log('');

    console.log("\x1b[34m", 'App: Launched with the ConcreteRedCreator.', "\x1b[0m");
    clientCode(new ConcreteRedCreator());
}