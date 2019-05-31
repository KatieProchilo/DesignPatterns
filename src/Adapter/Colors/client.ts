import { Adaptee, Adapter } from './adaptee';
import { Target } from './target';

function clientCode(target: Target) {
    console.log(target.request());
}


export const adapterTest = () => {
    console.log('\n\n##### COLORS - ADAPTER TEST #####\n');

    console.log('Client: I can work just fine with the Target objects:');
    const target = new Target();
    clientCode(target);

    console.log('');

    const adaptee = new Adaptee();
    console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
    console.log(`Adaptee: ${adaptee.specificRequest()}`);

    console.log('');

    console.log('Client: But I can work with it via the Adapter:');
    const adapter = new Adapter(adaptee);
    clientCode(adapter);
}