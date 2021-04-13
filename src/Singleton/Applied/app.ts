// Can only be accessed by one instance of the singleton class.
const data = {
  "Elsa": {
    hair: "blonde",
    persona: "She is a calm, calm, and rather dark girl, with an elegant dignity that you might think of a princess",
    favoriteNumber: 7,
    favoriteQuote: "Do you want to build a snowman?"
  },
  "SpongeBob SquarePants": {
    hair: "bald",
    persona: "multi-dimensional sponge",
    favoriteNumber: 13,
    favoriteQuote: "What was that thing I said in Amsterdam? Dang I forgot it."
  },
  "Dora Explorer": {
    hair: "brown football",
    persona: "eternal questioning",
    favoriteNumber: 5,
    favoriteQuote: "Do you know how to get to the beach?"
  }
}

class Singleton {
  constructor() {
    console.log(data);
  }
}

export const appliedSingletonTest = () => {
  console.log('\n##### APPLIED - SINGLETON TEST #####');

  new Singleton();
}
