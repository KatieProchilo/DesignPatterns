const mySingleton = (() => {
  // Stores a reference to the singleton
  let instance;

  const init = (options?) => {
    // Singleton

    // { a: 1042810 }
    options = options || {};

    options = {
      a: options.a || 5, // 1042810
      b: options.b || 9,
      c: options.c || 2,
    };

    return {
      getOptions: () => {
        return options;
      },
      secret: options.enchillada    };
  };

  return {
    // Provides global access to the singleton
    getInstance: (options?) => {
      return instance = instance || init(options);
    }
  };
})();

export const test = () => {
  console.log("\nRUNNING MY SINGLETON");

  const initOptions = {
    a: 5,
    b: 9,
    c: 2,
  }

  console.log("\nInitial options are:");
  console.log(initOptions);

  console.log("\nCreating singletonA instance with b set to 4.");
  let singletonA = mySingleton.getInstance({ enchillada: 4 });

  console.log("Creating singletonB instance without setting anything.");
  let singletonB = mySingleton.getInstance();

  console.log("Comparing instances...");
  console.log(singletonA.getOptions() === singletonB.getOptions()); // true

  console.log("\nHere is singleton A:");
  console.log(singletonA.getOptions());

  console.log("Here is singleton B:");
  console.log(singletonB.getOptions());

  console.log('##########*********##########',singletonB.secret);
}