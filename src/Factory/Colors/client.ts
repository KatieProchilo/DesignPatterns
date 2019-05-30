import { ConcreteBlueCreator, ConcreteRedCreator, Creator } from './creator';

const clientCode = (creator: Creator) => {
    console.log(`Client: I don't know if the creator class is RED or BLUE, but it still works.`);
    console.log(creator.someOperation());
}

export const factoryTest = () => {
    console.log('\n\n##### COLORS - FACTORY TEST #####\n');

    console.log("\x1b[34m", 'Test: Launched with the ConcreteBlueCreator.', "\x1b[0m");
    clientCode(new ConcreteBlueCreator());
    console.log('');

    console.log("\x1b[31m", 'Test: Launched with the ConcreteRedCreator.', "\x1b[0m");
    clientCode(new ConcreteRedCreator());
}