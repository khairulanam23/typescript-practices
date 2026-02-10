{
  //type assertion

  let anything: any;
  anything = "Khairul anam";
  (anything as string).length;

  const kgtoGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value);
      return convertedValue;
    }
    if (typeof value === "number") {
      return value;
    }
  };

  const result1 = kgtoGm(1000) as number;
  const result2 = kgtoGm("1000") as string;

  type CustomError = {
    message: string;
  };
  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}

{
  //interface

  type User1 = {
    name: string;
    age: number;
  };
  //We can use premitive only using type aliass

  type UserWithRole1 = User1 & { role: string };
  const user3: UserWithRole1 = {
    name: "khairul",
    age: 24,
    role: "manager",
  };

  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user4: UserWithRole2 = {
    name: "khairul",
    age: 24,
    role: "manager",
  };

  const user1: User1 = {
    name: "Persian",
    age: 100,
  };

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 3, 4];

  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;
}

{
  //generic type
  // const rollNumber : number [] = [3,5,8];
  const rollNumber: Array<number> = [3, 5, 8];

  // const mentors : string [] = ["Mr X", "Mr. Y", "Mr. Z"]
  const mentors: Array<string> = ["Mr X", "Mr. Y", "Mr. Z"];

  //type GenericArray = Array<boolean>
  type GenericArray<T> = Array<T>;
  const boolArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Khairul Anam",
      age: 24,
    },
    {
      name: " Rintu",
      age: 23,
    },
  ];

  //generic tuple
  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr. X ", "Mrs. Y"];

  const UserWithId: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "persian", email: "persi@gmail.com" },
  ];
}

{
  //generic type using Interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  const poorDevelopr: Developer<{
    brand: string;
    model: string;
    display: string;
  }> = {
    name: "Khairul Anam",
    computer: {
      brand: "Asus",
      model: "X-255UR",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: " Emilab",
      model: "kw66",
      display: "Oled",
    },
  };

  const richDevelopr: Developer<
    {
      brand: string;
      model: string;
      heartTrack: boolean;
      sleepTrack: boolean;
    },
    null
  > = {
    name: "Ishrat Rintu",
    computer: {
      brand: "Hp",
      model: "X-265UR",
      releaseYear: 2023,
    },
    smartWatch: {
      brand: " Apple Watch",
      model: "Pro 4",
      heartTrack: true,
      sleepTrack: true,
    },
  };
}

{
  //functions with generic

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");
  const resGeneric2 = createArrayWithGeneric<{
    id: number;
    name: string;
  }>({
    id: 24,
    name: "Ishrat rintu",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Web Development";

    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent({
    name: "Mr. X",
    email: "mrx@gmail.com",
    devType: "Developer",
  });
  const student2 = addCourseToStudent({
    name: "Mr. Y",
    email: "mry@gmail.com",
    hasWatch: true,
  });
}

{
  //constraint
  const addCourseToStudent = <T extends { name: string; email: string }>(
    student: T,
  ) => {
    const course = "Web Development";

    return {
      ...student,
      course,
    };
  };
}

{
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type owner = keyof Vehicle;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const user = {
    name: "Khairul Anam",
    age: 24,
    address: "Dhaka",
  };

  const result1 = getPropertyValue(user, "name");
}

{
  //asynchronous typescript
  //basic promise

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data!");
      }
    });
  };

  //calling create promise function

  const showData = async () => {
    const data: string = await createPromise();
    return data; //returning string type data
    //console.log(data);
  };

  showData();
}

{
  //conditional type

  type Sheikh = {
    bike: string;
    car: string;
    plane: string;
    ship: string;
  };

  type CheckVehicle<T> = T extends Sheikh ? true : false;

  type HasPlane = CheckVehicle<"plane">;
}

{
  //mapped types
  type AreaNumber = {
    height: number;
    width: number;
  };

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
}

{
  //utility types

  //pick utility
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  //omit
  type ContactInfo = Omit<Person, "name" | "age">;

  //required
  type PersonRequired = Required<Person>;

  //partial
  type PersonPartial = Partial<Person>;

  //readonly
  // const person1 : Person ={
  //   name : "Khairul Anam",
  //   age : 24,
  //   contactNo : "01284"
  // }
  type PersonReadony = Readonly<Person>;

  //record
  type MyObj = Record<string, string>;

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };
}
