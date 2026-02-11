{
  /*Type of Paradigm
    1. Procedral Programming
    2. Functional Programming
    3. Declarative Programming
    4. OOP
    5. Event Driven Programming
    */
}

{
  class Animal {
    // name: string;
    // species: string;
    sound: string;

    //parameter properties

    constructor(
      public name: string,
      public species: string,
      sound: string,
    ) {
      //   this.name = name;
      //   this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepard", "dog", "Ghew Ghew");
  const cat = new Animal("Persian", "cat", "Mew Mew");

  cat.makeSound();
}

{
  //Inheritance

  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  class Teacher extends Parent {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string,
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass}`);
    }
  }
}

{
  //Type Guard
  // 1. typeOf
  // 2. in guard
  // 3. instance of guard
}

{
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I am meawing");
    }
  }

  const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
      animal.makeBark();
    } else if (animal instanceof Cat) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Dog Bhai", "Dog");
  const cat = new Cat("Cat Bhai", "Cat");
}

{
  //Access Modifier

  class BankAccount {
    readonly id: number;
    name: string;
    // private _balance: number;
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    // addDeposite(amount: number) {
    //   this._balance += amount;
    // }

    //setter
    set deposit(amount: number) {
      this._balance += amount;
    }

    // get_balance() {
    //   return this._balance;
    // }

    //getter
    get balance() {
      return this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. X", 20);

  goribManusherAccount.deposit = 50;

  const myBalance = goribManusherAccount.balance;
  console.log(myBalance);

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }
  }
}

{
  //Statics In Oop

  class Counter {
    count: number = 0;
    increment() {
      return (this.count += 1);
    }
    decrement() {
      return (this.count -= 1);
    }
  }

  const instance1 = new Counter();
  console.log(instance1.increment()); //different memory

  const instance2 = new Counter();
  console.log(instance2.increment()); //different memory

  class Counter2 {
    static count: number = 0;
    static increment() {
      return (Counter2.count += 1);
    }
    static decrement() {
      return (Counter2.count -= 1);
    }
  }

  console.log(Counter2.increment()); //same Count
  console.log(Counter2.increment()); //same Count
}

{
  //Ploymorphism
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(10, 20);

  getShapeArea(shape1);
  getShapeArea(shape2);
  getShapeArea(shape3);
}


{
    //abstraction
    
}