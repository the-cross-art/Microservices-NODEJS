let apples:number = 5;
let speed:  string ='fast';

let now: Date = new Date();

//Array
let colors:string[] = ['red', 'green', 'blue'];
let myNumber:number[] = [1,2,3];
let truths: boolean[] =[true,true,false];

//classes

class Car {

}
let car: Car=new Car();

// Object literal
let point: {x:number; y:number} = {
  x:10,
  y:20
}

//Function
const logNumber: (i:number) =>void = (i:number) => {
  console.log(i);
};