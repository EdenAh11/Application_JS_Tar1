class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
        }
    
    Show(){
        return (`(${myPoint.x},${myPoint.y})`);
    }
    Equal(p){
        if(this.x == p.x && this.y == p.y){
            return true
        }

        return false
    }
    
}

const myPoint = new Point();
let arr = [];

function InArr(arr1,x,y){
    for (let index = 0; index < arr1.length; index++) {
        if(arr[index].x == x && arr[index].y == y){
            return true;
        }   
    }
    return false;
} 

function InArray(arr2,p){
    for (let index = 0; index < arr2.length; index++) {
        if(arr2[index].Equal(p)){
            return true
        }
    }
    return false
}

function LenghtPoint(arr3){
    arr3.sort((a,b) => a.x-b.x);
    let LenghtArr = 0

    for (let index = 0; index < arr3.length-1; index++) {
      
        let d_x = (parseInt(arr3[index].x) - parseInt(arr3[index+1].x))**2
        let d_y = (parseInt(arr3[index].y) - parseInt(arr3[index+1].y))**2

        LenghtArr += (d_x + d_y)**0.5
    }
    return LenghtArr.toString();

}

document.getElementById("Set").onclick = function(){
    myPoint.x = document.getElementById("x").value;
    myPoint.y = document.getElementById("y").value;

    let p = document.getElementById("p");
    p.innerHTML = "";

    let myPoint2 = new Point(myPoint.x,myPoint.y);
    if(InArray(arr,myPoint2) == false)
    {
    arr.push(myPoint2);
    }
    document.getElementById("x").value = "";
    document.getElementById("y").value = "";
    p.innerHTML += `${myPoint2.Show()}`;

    document.getElementById("x").focus();

    
}

document.getElementById("Send").onclick = function(){
    let p = document.getElementById("p");
    p.innerHTML = "";

    p.innerHTML +=`Lenght Point : ${LenghtPoint(arr)}`;
    document.getElementById("x").value = "";
    document.getElementById("y").value = "";
    document.getElementById("x").focus();


}

