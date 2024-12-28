// let x:string ="gt";  //can remove the annotaion after initialization, x will still be string.
// let n=10000;
// let i=0;    // after initialization the ts complier will understand that the value is number; no need of annotation.

// //any 
// let r;   // ts compiler will take it as any.
// r=1;
// r="may";
// console.log(r); 

// // function render(document){   //here the parameter 'document' implicitly has 'any' type. this throws an error.   
// //     console.log(document);   //can resolve this by changing the "noImplicitAny":"false" in the tsconfig.json file. But that is not a good practice.
// // }

// //array
//  let numbers:number[]= [1,2,3,4,5];  // represents an array of numbers. it's not like we have to add annotation, similar to above concept after initialization ts compiler will automatically understand the type of array.
//  let names:string[]=['Pramin','Ayush'] //represents an array of strings. can remove the annotation, similar to above concept
// let empty:number[] =[]   //if there is empty array without annotation, the type of the variable empty becomes 'any' type which we should avoid.
// empty[0]=1;     //and because it allows anything like empty[0]=1; empty[1]='gt'; so if we want to use empty array, we have to explicitly define the type of the array i.e add annotation.
// empty[1]=2;


// //tuples
// let person:{name:string,age:number}={name:'Pramin',age:25}; //if we want to add variables , we use {}.
// let user:[number, string]=[1,'Ramu'];    //if we compile this ts file into js, user will be an array of two elements i.e. user=[1,'Ramu']
// //user.push(1);    //this does not throws error; one of the gaps in ts
// console.log(user);
// console.log(person);

//enums

//enum Size {Small, Medium , Large}; //by default, the tsc complier assign Small=1, Medium=2, Large=3 or we can assign manually
//const enum Size{Small, Medium=2, Large=4}; //using const will generate more optimized js code 
//enum Size {Small='s',Medium='m', Large='l'} // can also assign string values to enum, have to explicitly assgin all variables if one of the value is assigned,in case of string.
// let mySize:Size =Size.Large;  //can use enum Size as one of the type and access it.
// console.log(mySize);

//Functions -for best practice, anotate what the function will return. if we anotate void, the function will not return anything
// function calculate(a:number,b=12,c:number):number{     //giving b defualt value and if making c optional e.g. c?:number,will cause error later inside the function while using it because undefined will be passes in the value of c.so,instead of making it otional, it is better to give a defualt value.             
// //let x;     // ts compiler will detect he unused variable and throw an error, we have to explicitly uncomment the feature in config file.
//     if (a>20)                                                           // should return the anotated value, eg, anotating number and the function is returning string will throw an error.
//     return b+c;    //if we leave here, it will throw error, cause function is number and if the value of a<20, the function will return "undefined" by default. So, we have to add else and return statemet.                                                
// else
// return a+b;
// }
// console.log(calculate(1,2,4));  //the value of b i.e 2 will override the default value 12.

//objects
// type employe ={        //using concept of type aliases and creating a new type employe.
//     readonly id:number,          //readyonly modifier means we can't change the value of id after initialization.
//     name:string,
//     retire : (date:Date)=> void  // retire as method inside an object.
// }
// let user :employe ={ 
//     id:47,
//     name:'Pramin',
//     retire: (date:Date)=>{
//         console.log(date);
//     }
// }


// // Type alias and interfaces
// // define a custom name or type i.e. aliases
// type userName=string;
// type userId=Number;
// type userAddress=string;
// type user={
//     name:userName;
//     id:userId;
//     address:userAddress
// }
// const userName:userName="bunny";   //if we donot annotate, this will be of any type.
// const userId:userId=1001;
// const userAddress:userAddress="kathmandu";
// const person:user={
//     name:"pragya",
//     id:43,
//     address:'sukedhara'
// }

// //Interface 
// // similar to type aliases, expect they only apply to objects types.

// interface vehicle {
//     name:string,
//     model:number,
// }
// // extending interface
// interface newVehicle extends vehicle{
//     color:string,
//     price:number
// }
// const car:newVehicle={
//     name:"Tesla",
//     model:100,
//     color:"Black",
//     price:1000000
// }
// console.log(car);


// //Unions type
// used when a value can be more than single type eg. number or string. this uninon type will not be the part of generated js cause its purely for the complier for typechecking.
// function kgToLbs (weight:number | string ):number{   
//  //narrowing - narrowing the union type into more specific type
//  if(typeof weight =='number')
//     return weight*2.20462;
// else
// return parseInt(weight)*2.20462;
// }
// console.log(kgToLbs(10));
// console.log(kgToLbs("10kg"));

// //intersection type
// // combine many ttypes to create single type. eg. string & number, but this is not practically possible.
// //example 1
// interface student{
//     student_id:number,
//     student_name:string
// }
// interface teacher{
//     teacher_id:number,
//     teacher_name:string
// }
// type intersected_type= student & teacher;   //intesection type follows commutative and associate rule i.e. A&B=B&A , (a&b)&c=a&(b&c)
// const obj:intersected_type={
// student_id:1,
// student_name:"Sabin",
// teacher_id:101,
// teacher_name:"Sunil"
// }
// console.log(obj)

// //example 2
// interface A{
//     featureA:number,
//     featureB:string
// }
// interface B{
//     featureA:number,
//     featureB:string
// }
// //if both the interface have same named properties and their type is also simliar, we can only assign value for once and that value will be assigned to both the properties of both interface.
// //if the type of featureA is number in interface A and string in interface B, error will be thrown saying that; type 'number' is not assignablt to type 'never' i.e. 'string & number'.
// type AB = B & A;
// const obj2:AB={
// featureA:1,
// featureB:"clone",
// }
// console.log(obj2)


// literal type
// used to limit the value assign to a variable.
// let numnber: 50 = 50;  //number other than 50, throws ereor.

// type quantity = 50|60|70|80;
// let quantity1:quantity = 80;

// type color="green" | "red" | "blue";
// let color1:color= "green";



//nullable types
 