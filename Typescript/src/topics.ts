// // string, number, boolean, any, void, null, undefined
// let userName:string="Pramika";
// let userAge:number=20;
// let isauthorized:boolean= true;
// let anything:any= "Can be anything";
// let nothing:void= undefined;   // we use null, throws error.

// function display(para:string|number|boolean|any|void){
// return para; 
// }
// console.log(display(nothing));

//type inference
// let a=10;  
// let b='Jerry';


//Generics
//makes reusable and type safe code. creates type variables that is used to create class, function and type alises
// Generalized function
// function create<T>(n1:T):T{
//     return n1;
// }
// console.log(create<number>(10));
// console.log(create<string>("gt"));

// function createPairs<A,B> (s:A, n:B):[A,B]{
//   return [s,n]
// }
// console.log(createPairs<string, number>("vengence",2));

//Generalized Class
//allows reusable and type safe code.
//example1
// class NamedValue<T>{
//     private _value:T|undefined;  //privarte property, can be accessed thorough the methods like setValue and getValue. 

//     constructor(private name:string){}  //property initialized through the constructor.

//     public setValue(value:T){   //method
//         this._value=value;
//     }

//     public getValue():T|undefined{   //method
//         return this._value;
//     }

//     public toString():string{      //method
//         return `${this.name}: ${this._value}`;
//     }
// }
// let value=new NamedValue<number>("mynumber");
// value.setValue(10);
// console.log(value.toString());

// //example2
// class Box<T> {
//     private content : T;

//     constructor(item:T){
//        this.content=item;
//     }

//     public getContent():T{
//         return this.content;
//     }

//     public setContent(item:T):void{
//     this.content=item ;
//     }
// }
// let newBox= new Box<number>(10);
// console.log(newBox.getContent()); //10
// newBox.setContent(20);
// console.log(newBox.getContent()); //20

// let newBox2=new Box<string>("Hey");
// console.log(newBox2.getContent()); //Hey
// newBox2.setContent("Hello");
// console.log(newBox2.getContent()); //Hello


//type aliases
//similar to interfac 
// type wrapped<T> ={
//     value:T;
// }
// let wrapedValue:wrapped<number>={
//     value:10
// };


//modules and namespace
// import {calculate} from './index';
// calculate(1,2,3);

//Utility types
// interface point{
//     x:number,
//    y:string,
//    z:boolean
// }
//let pointPart:Partial<point> ={}  //allows x and y to be optional, if Partial type is not used, it will throw an error.

// let pointPart:Readonly<point> = {  // makes all properties readonly, i.e cannot be changed once assigned.
// x:10,
// y:"thaks"
// }
//pointPart.x=11  //throws error.
 

// let pointPart:Pick<point ,'y'>= {  // `Pick` has only kept x, so y is removed from the type/interface and can't be defined.
// y:"Dr.Martin"
// }

// let pointPart: Omit<point,'y'|'z'> ={   // Omit removes the keys/properties from the object types.
// x:1,
// //y:"samir"    //can user union type to omit multiple properties.
// }

//Type casting and assertion
// process of overriding the type of varivales.
//casting with as  : straightforwad way to cast a variable

let t:unknown='hello';
console.log((t as number));
//console.log((<string>t).length);  // casting with <>

//Decorators 




