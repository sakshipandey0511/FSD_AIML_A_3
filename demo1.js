const num= [1, 2, 3, 4, 5];
//const b=num[0];
//const c=num[1];

//*Destructuring of arrays*
const[b,c]=num;
console.log("b:", b);
console.log("c:", c);

const student = {
   name: "Sakshi",
    age: 20,
    branch: "AIML"};
//const name = student.name;
//const age = student.age;
//const branch = student.branch;

const {name, age, branch} = student;
console.log("Name:", name);
console.log("Age:", age);
console.log("Branch:", branch);


