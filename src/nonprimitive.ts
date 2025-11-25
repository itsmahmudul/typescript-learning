// array , object

//ts - tuple

let bazarList: string[] = ['eggs', 'milk', 'sugar'];


let mixedArr : (string | number)[] = ['eggs', 12, 'milk', 1, 'sugar', 2];



// reference type : object 

const user : {
    organization : string;
    firstName: string;
    middleName?: string; //optional type 
    lastName :  string;
    isMarried : boolean;
} = {
    firstName:  'Mahmudul',
    middleName: 'Alam',
    lastName : 'Shuvo',
    isMarried : false,
    organization :  'Programming Hero',
};  