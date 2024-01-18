// variavel in java
// D/B
// var are 
// var a=5
// var a=10
// a=6
// console.log(a)
// let b=8
// b=6
// console.log(b)
// const c=20
// console.log(c)

// 2

// let firstname='aditya'
// let firstName='aditya'
// let lastName='dubey'
// // console.log(firstName+""+lastName)
// console.log(`${firstName}   ${lastName}`)

// 3 =vs==
// var a=100
// let to=a==100
// console.log(to)

// 4 =vs== vs ===

// let arr=[1,2,3,4,5,6]
//  let sum=0;
//  for(let i=0; i <arr.length; i++){
//   sum+=arr[i];
//  }
//  console.log(sum)


// let obj={
//         id:1,
//         user:"hello",
//         idpass:true
// }
// obj.user='hiii'
 

// let arr=[{id:1, user:'hello',},{id:2,user:'hiiii'}]
// arr.map((k)=>{
//     console.log (k.id)

// })
// let arr=[1,2,3,4,5,6]
// arr.pop()
// arr
// let a
// console.log(a)
// a=5
// ................
// var a=5 
// if(true){
//     var a=0
//     console.log(a)

// }
// console.log(a)
// .................
// higher order function
// function outer(a){
//     console.log('outer')
//     a()
// }
// function inner(){
//     console.log('inner')

// }
// outer (inner)
// ..........................
// function outer(){
//    console.log('outer')
//    function inner(){
//     console.log('inner')

//    }
//    return inner
// }
// let inner= outer()
// inner()
// ..................
// let  arr= [1,2,3,4, 'hello','hii',true,false]


// function getString(item){
//     return typeof item ==='String'
// }
// function getNumber(item){
//     return typeof item ==='Number'
// }
// function getBool(item){
//     return typeof item ==='Boolean'
// }
// function get (arr,fn){
//     let res=[]
//     for(let item of arr){
//         if(fn(item)){
//             res.push(item)
//         }
//     }
//     return res

// }

// console.log(get(get,getString))
// console.log(get(get,getNumber))
// console.log(get(get,getBool))

// function get(){
//     let res=[]
//     for(let item of arr){
//         if(typeof item=== 'string'){
//             res.push(item)
//         }
//     }
//     return res
// }


// function getNumber(){
//     let res=[]
//     for(let item of arr){
//         if (typeof item=== 'number' ) {
//             res.push(item)
            
//         }
//     }
//     return res
// }

// console.log(get(arr))
// console.log(getNumber(arr
// ...................................
// callBack function

//  function callBack(num, fn){
//     return fn(num)
//  }
//  function Boolean(num){
//     return typeof num ==='boolean'
//  }
//  console.log(callBack(true,Boolean))
// //  ......................
// function outer (){
//     let user= 'hello'
//     function inner(){
//         console.log(user)
//     }
//     return inner
// }
// let inner= outer()
// let obj={
//     Id:1,
//     user:'hello',
//     print:function
//     // console.log()

// }

// console.log(obj.toString)




// function outer(){
//     this.usernName='hello'
//     this.usernlastName='hiii'

// }
// let user= new outer()
// console.log(user)

function outer(){
    this.usernName=user,
    this.usernlastName=lastName

}
let user= new outer('hello' )
console.log(user)


