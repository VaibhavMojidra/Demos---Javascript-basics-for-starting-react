function hello(){
   return new Promise(function(resolve,reject){
        setTimeout(() => {
            const error=false;
            if(error){
                console.log("Func: Error Reject");
                reject();
            }else{
                console.log("Func: Resolved");
                resolve();
            }
        }, 2000);
    });
}


hello().then(function(){
    console.log("Thanks for resolving")
}).catch(function(){
    console.log("Rejected")
});