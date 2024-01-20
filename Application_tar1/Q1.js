class Counter{
    constructor(num){
        this.num = num
    }
    Initialize(){
        let p1 = document.getElementById("p");
        p1.innerHTML = "";
        myCounter.num = document.getElementById("name").value;
        console.log(myCounter.num);
        document.getElementById("Start").disabled = true;
        document.getElementById("+").disabled = false;
        document.getElementById("Go").disabled = false;

        
      
    }
    Increment(){
        
        let x = parseInt(myCounter.num)
        x += 1;
        document.getElementById("name").value = x.toString();
        this.num = x;
    }
    Go(){
        let y = myCounter.num
        let numbers = document.getElementById("p");
        numbers.innerHTML = "";
        for (let index = 0; index < parseInt(y); index++) {
        numbers.innerHTML += `${index.toString()} , `   ;
            }
        numbers.innerHTML += `${y.toString()}`;
        document.getElementById("name").value = "";
        document.getElementById("name").focus();

        document.getElementById("Start").disabled = false;
        document.getElementById("+").disabled = true;
        document.getElementById("Go").disabled = true;
        }
        
}

const myCounter = new Counter();

document.getElementById("Start").onclick = function(){
    myCounter.Initialize();
}
document.getElementById("+").onclick = function(){
   
    myCounter.Increment();
}
document.getElementById("Go").onclick = function(){
    myCounter.Go();
} 

  
  

