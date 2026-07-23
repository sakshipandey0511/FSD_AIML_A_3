function register(){
    console.log("User register here!")
    waitforinput(5000);
}

function login(){
    console.log("User login here!")
}


function getdata(){
    console.log("fetch data!")
}


function displaydata(){
    console.log("Display Data!")
}


function waitforinput(delay){
    const ct=Date.now();
    const ms=ct+delay;
    while(Date.now()<ms){}
}

register();
login();
getdata();
displaydata();
console.log("Call another app!!")
