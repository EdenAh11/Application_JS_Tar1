class Duck{
    constructor(name,color,age,weight,img){
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.img = img
    }
    ShowDetails(){
        let p = document.getElementById("p");
        p.innerHTML = "";

        let obj = {"name":this.name,"color":this.color,"age":this.age,"weight":this.weight};
        p.innerHTML += "<h1>Duck Details:</h1>";
        for(let key in obj){
            let k = key
            p.innerHTML += `${key}: ${obj[key]}<br>` ;
        }
        p.innerHTML += `<img src="${this.img}.jpg" width="100" height="100">`

    }
    Quack(){
        let p = document.getElementById("p");

        p.innerHTML = "";

        let num = Math.round((parseInt(this.age)*parseInt(this.weight))/2);
        for (let index = 0; index < num; index++) {
           p.innerHTML += "<b>Quack!</b><br>";
        }

        for (let index1 = 0; index1 < 3; index1++) {
            playAudio();
        }
      
    }
}

const myDuck = new Duck();

document.getElementById("Send").onclick = function(){
    myDuck.name = document.getElementById("name").value;
    myDuck.color = document.getElementById("color").value;
    myDuck.age = document.getElementById("age").value;
    myDuck.weight = document.getElementById("weight").value;
    myDuck.img = document.getElementById("image").value;

        document.getElementById("Send").disabled = "false";
        document.getElementById("Show").style.visibility = "visible";
        document.getElementById("Quack").style.visibility = "visible";

}
document.getElementById("Show").onclick = function(){
    myDuck.ShowDetails();
}
document.getElementById("Quack").onclick = function(){
    myDuck.Quack();
}


function playAudio(){
    let audio = new Audio("Duck_Effect.mp3");
    let Count = 0;

function play() {
    if (Count < 3) {
        audio.play();
        Count++;
    }
}

audio.addEventListener('ended', play);

play();

}