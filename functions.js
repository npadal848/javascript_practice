function greetings(){
    console.log("Welcome to Javascript");
}

greetings();

console.log("============Sum()==========");

function sum(num1, num2, num3=40){
    console.log(num1+num2+num3);
  }
  
  sum(10, 20);
  sum(10, 20, 30);
  
  //it ignores remain arguments
  sum(10, 20, 50, 40 , 50, 60);
