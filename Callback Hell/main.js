//console.log("Hell0");
//setTimeout(function(){
//    console.log("This Will Execute Later");
//},3000);
//console.log("Wprld");
//console.log("Three");

function getCheese(callback){
    setTimeout(() => {
        const cheese= '🧀';
        console.log("Here Is Cheese",cheese);
        callback(cheese);
    }, 2000);
    
}

function makeDough(cheese,callback){
    setTimeout(() => {
       const dough=cheese+ "🎂" ;
       console.log("Here Is the Dough",dough);
       callback(dough)
    }, 2000);
}

function bakePizza(dough,callback){
    setTimeout(() => {
       const pizza=dough+ "🍕" ;
       console.log("Here Is the Pizza",pizza);
       callback(pizza)
    }, 2000);
}


getCheese((cheese)=> {
    makeDough(cheese,(dough) => {
        bakePizza(dough,(pizza)=>{
            console.log("Got Pizza",pizza);
        });
        
    })

});