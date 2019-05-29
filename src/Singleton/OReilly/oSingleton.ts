const goodSingleton = (() => {
    // Stores a reference to the singleton
    let instance;

    const init = () => {
        // Singleton

        let privateRandomNumber = Math.random();

        return {
            getRandomNumber: () => {
                return privateRandomNumber;
            },
        };
    };

    return {
        // Provides global access to the singleton
        getInstance: () => {
            if (!instance) {
                instance = init();
            }

            return instance;
        }
    };
})();

const badSingleton = (() => {
    // Stores a reference to the singleton
    var instance;

    const init = () => {
        // Singleton

        let privateRandomNumber = Math.random();

        return {
            getRandomNumber: () => {
                return privateRandomNumber;
            }
        }
    };

    return {
        getInstance: () => {
            instance = init();

            return instance;
        }
    };
})();

export const oSingletonTest = () => {
    console.log("\nRUNNING OREILLY SINGLETON");

    console.log("\nCreating a good singleton instance.");
    let singletonA = goodSingleton.getInstance();

    console.log("Creating a second good singleton instance.");
    let singletonB = goodSingleton.getInstance();

    console.log("Comparing good instances...");
    console.log(singletonA.getRandomNumber() === singletonB.getRandomNumber()); // true

    console.log("\nCreating a bad singleton instance.");
    let badSingletonA = badSingleton.getInstance();

    console.log("Creating a second bad singleton instance.");
    let badSingletonB = badSingleton.getInstance();

    console.log("Comparing bad instances...");
    console.log(badSingletonA.getRandomNumber() === badSingletonB.getRandomNumber()); // false
}