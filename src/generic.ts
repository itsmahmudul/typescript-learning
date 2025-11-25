// dynamically generalize : Generic

type GenericArray<T> = Array<T>;

// const friends: string[] = ["Mr. X", "Mr. Y"];
const friends: GenericArray<string> = ["Mr. X", "Mr. Y"];


// const rollNumber: number[] = [4, 5, 6];
const rollNumber: GenericArray<number> = [4, 5, 6];


// const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

type User = { name: string; age: number };

const userList: GenericArray<User> = [
    {
        name: "Mr. X",
        age: 23,
    },
    {
        name: "Mr. Y",
        age: 24,
    }
];

const sqrFunc = (value: number) => {
    return value * value;
}

sqrFunc(8);

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 30];

const coordinates2: Coordinates<string, string> = ["20", "30"];


