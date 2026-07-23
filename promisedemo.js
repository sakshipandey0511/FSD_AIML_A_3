function register(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log("User register here!");
        }, 6000);
    })
}

function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject();
            console.log("User login here!");

        }, 8000);
    })
}


function getdata(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log("fetch data!");
        }, 1000);
    });
}


function displaydata(){
    return new Promise((resolve, reject) => {
});
}

//register().then(login)
  //       .then(getdata)
  //       .then(displaydata)
   //      .catch((err) => {
   // console.log("Error", err);
//});

async function test(){
    try{
        await register();
        await login();
        await getdata();
        await displaydata();
    } catch (err) {
        console.log("Error", err);
    }
    test();
    console.log("Call another app!!");
};
