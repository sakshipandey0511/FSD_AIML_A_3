function register(){
    setTimeout(() => {
        console.log("User register here!")}, 5000);
}

function login(){
    setTimeout(() => {
    console.log("User login here!")
}, 5000);
}


function getdata(){
    setTimeout(() => {      
    console.log("fetch data!")}, 6000);
}


function displaydata(){
    setTimeout(() => {
        console.log("Display Data!")
    }, 1000);   
}



register();
login();
getdata();
displaydata();
console.log("Call another app!!")
