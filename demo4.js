const student={
    Name:"Sakshi",
    ID:2400321530173,
    Branch:"AIML"
};
console.log(student);
const newStudent={...student,Address:{City:"Delhi",Pincode:110092}};
console.log(newStudent);