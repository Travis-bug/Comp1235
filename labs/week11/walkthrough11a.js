console.log(b)//TOPIC 1: Async function
// KEYWORD
// in js, everytime the value return by function
// will be automatically wrapped in a promise or terms
async function promiseReturn(){
    return "This is a promise object"
}

//calling
const p1 =promiseReturn();
console.log("Async function: ", p1);

//TOPIC 2: AWAIT
// KEYWORD: AWAIT
// await is a wait for the resolution
// to complete the promise
async function processData(){
    try {
        const data = await fetchData();
        console.log("data received:");
    }catch(e){
        console.log("error:", e);
    }
}
    //calling
console.log("processing Data...." ,
    processData() );

// To resolve thr promise  => Promise.resolve("msg")
function PromiseReturn1() {
    return Promise.resolve("we had a success")
}
console.log("Resolve: ", PromiseReturn1());


// THEN CATCH on the Promise0bj
let promise0bj
= new Promise( (resolve, reject) => {
    let conSuccess =true
    if(conSuccess){
        resolve("Yeah! i got a success")

    }else{
        reject("Something went wrong")
    }
});

promise0bj.then(  ()=>{ console.log("success") }  )
.catch(  (err)=> { console.log("failure:") }  );

//