function register(cb){
    setTimeout(() => {
        console.log("User register here!");
    cb();}, 5000);
}

function login(cb){
    setTimeout(() => {
    console.log("User login here!");
    cb();
}, 5000);
}


function getdata(cb){
    setTimeout(() => {      
    console.log("fetch data!");
cb();}, 6000);
}


function displaydata(){
    setTimeout(() => {
        console.log("Display Data!")
    }, 1000);   
}

//Callback Hell
register(()=>(
    login(()=>{
        getdata(()=>(
            displaydata()
        ))
    })
));

console.log("Call another app!!")
