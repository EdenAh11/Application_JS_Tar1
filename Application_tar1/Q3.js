class Clock{
    constructor(Hours,Minutes,Seconds,Cname){
        this.Hours = Hours;
        this.Minutes = Minutes;
        this.Seconds = Seconds;
        this.Cname = Cname;
    }
    ConverToSeconds() {
        let convert = parseInt(myClock.Hours)*3600+ parseInt(myClock.Minutes)*60+parseInt(myClock.Seconds);
        return convert;
    }
    Show(){
        let clocks = `${myClock.Hours}:${myClock.Minutes}:${myClock.Seconds}`;
        return clocks
    }
}

const myClock = new Clock();
var arr = [];
let round = 0;

document.getElementById("Send").onclick = function(){
   
    myClock.Hours = convertNum(document.getElementById("hours").value);
    myClock.Minutes = convertNum(document.getElementById("minutes").value);
    myClock.Seconds = convertNum(document.getElementById("seconds").value);
    myClock.Cname = document.getElementById("cname").value;



    let myClock2 = {name:myClock.Cname,c1:myClock.Show(),con:myClock.ConverToSeconds()};

    arr.push(myClock2);
    round++;
    clearText();
    if(round == 2)  
    {
        let p2 = document.getElementById("p");
        for (let index = 0; index < arr.length; index++) {
            for(key in arr[index])
            {
            p2.innerHTML += `${arr[index][key]} ,`;
            }
            p2.innerHTML += '<br>';
        }
    
        clearText();
    }
    else { return }
   function clearText()  //clear all text
   {
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
    document.getElementById("cname").value = "";

    document.getElementById("hours").focus();
   } 
   function convertNum(num) //convert number under 10 example 5 = 05(clock)
   {
    if(parseInt(num) < 10)
    {
        return `0${num}`;
    }
    else { return num}
   }
    
    
};