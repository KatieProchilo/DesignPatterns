// Create an interface that has not been implemented.
interface Person {
    age: number;
    name: string;
}

// Now let's implement with a concrete class.
class eunji implements Person {
    age = 21;
    name = 'Eunji';
}

// The Observer
abstract class Observer {
    constructor() {}
    abstract Update: () => void;
}

// The Concrete Observer
class katieObserver implements Observer {
    constructor() {}
    Update = () => {
        console.log(`This is where we actually do stuff.`);
    };
}

export const concreteObserver = new katieObserver();
// concreteObserver.Update();
