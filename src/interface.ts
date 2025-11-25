type User = {
    name: string;
    age: number;
};

// interface : object type : array , object, function 

interface IUser {
    name: string;
    age: number;
};

type Role = {
    role: 'admin' | 'user';
};

type userWithRole = User & Role;

interface IUserWithRole extends IUser {
    role: 'admin' | 'user';
};

const user1: IUserWithRole = {
    name: "Mr. X",
    age: 23,
    role: "admin",
};

const user2: IUser = {
    name: "Mr. T",
    age: 22,
};

type isAdmin = boolean;

const IsAdmin: isAdmin = false;

//function 

type add = (num1: number, num2: number) => number;

interface IAdd {
    (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;

type Friends = string[];

interface IFriends {
    [index: number]: string;
}

const friends: IFriends = ["A", "B", "c"];