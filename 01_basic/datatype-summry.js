let value = 9;
let ngValue= -value;
// primitive datatypes

//7 types  number , string , null, boolean , bigint , undefine , symbol

let number=56;
let string= "iqra";
let nullVall=null; //its object type in typeof functon
let boolean = true;
let undefineValue = undefined;
// its use n a the end of number to change it to big int number
let bigint = 28283423840912849812093480938n;

//symbole provide us to creat uniqe id number  if the value same in symbole but it treated as  a diffrent number 
let id = symbol(5);
let newid = symbol(5);


//refrence type  
// object , array , function 

//array
const languages = [ "c" , "cpp" , "java" ,"python"];
 console.log(languages)

  //object 

  const newobj={
    name :"iqra",
    age:20,
  }
//function
 const newfuc = function(){
    let name2="muskan";
}

//***********stack and heap ************************* 
//stack(primitive data type )   and heap(refrence datatype)

//in stack the stack pass the copy of object which canot be change orignal value 

let user1 = "muskan";
let user2 =user1
console.log(user2) //same as user1 

user2 = "iqra";
console.log(user2) //its diffrent from first one but  user1 value same as privious value 


//heap (refrence type data type )
let obj1 = {
    name:"User1",
    email:"123@gmail.com",
}
   let obj2 =obj1;// the both value are same but if we updated the ob2 vale it will also reflect from oure main obj1 
