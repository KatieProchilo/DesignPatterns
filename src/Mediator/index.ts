/**
 * The Mediator interface declares a method used by components to notify the
 * mediator about various events. The Mediator may react to these events and
 * pass the execution to other components.
 */
interface Mediator {
  notify(sender: object, event: string): void;
}

/**
* Concrete Mediators implement cooperative behavior by coordinating several
* components.
*/
class ConcreteMediator implements Mediator {
  private component1: Component1;

  private component2: Component2;

  constructor(c1: Component1, c2: Component2) {
    this.component1 = c1;
    this.component1.setMediator(this);
    this.component2 = c2;
    this.component2.setMediator(this);
  }

  public notify(sender: object, event: string): void {
    if (event === 'A') {
      console.log('Mediator reacts on A and triggers following operations:');
      wait(2000);
      this.component2.doC();
    }

    if (event === 'D') {
      console.log('Mediator reacts on D and triggers following operations:');
      wait(2000);
      this.component1.doB();
      this.component2.doC();
    }
  }
}

/**
* The Base Component provides the basic functionality of storing a mediator's
* instance inside component objects.
*/
class BaseComponent {
  protected mediator: Mediator;

  constructor(mediator: Mediator = null) {
    this.mediator = mediator;
  }

  public setMediator(mediator: Mediator): void {
    console.log('The Component is subscribed to the Mediator.');
    wait(2000);
    this.mediator = mediator;
  }
}

/**
* Concrete Components implement various functionality. They don't depend on
* other components. They also don't depend on any concrete mediator classes.
*/
class Component1 extends BaseComponent {
  public doA(): void {
    console.log('Component 1 does A.');
    wait(2000);
    this.mediator.notify(this, 'A');
  }

  public doB(): void {
    console.log('Component 1 does B.');
    wait(2000);
    this.mediator.notify(this, 'B');
  }
}

class Component2 extends BaseComponent {
  public doC(): void {
    console.log('Component 2 does C.');
    wait(2000);
    this.mediator.notify(this, 'C');
  }

  public doD(): void {
    console.log('Component 2 does D.');
    wait(2000);
    this.mediator.notify(this, 'D');
  }
}

/**
 * The client code.
 */
export const test = () => {
  console.log('Creating Component 1...');
  wait(2000);
  const c1 = new Component1();

  console.log('Creating Component 2...');
  wait(2000);
  const c2 = new Component2();

  console.log('Creating Concrete Mediator...\n');
  wait(2000);
  const mediator = new ConcreteMediator(c1, c2);

  console.log('Client triggers operation A.');
  wait(2000);
  c1.doA();

  console.log('\nClient triggers operation D.');
  wait(2000);
  c2.doD();
}

const wait = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}