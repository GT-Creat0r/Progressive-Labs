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

