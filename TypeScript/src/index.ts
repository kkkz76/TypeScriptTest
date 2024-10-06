console.log("Hello World");
//this is for number
let num1: number = 10;
// this is for String
let text1: string = "apple"

if(num1 < 20){
    num1 += 10
}
console.log(num1)
   
let numArray : number[] = [1 ,2 , 3]
let numTuple : [number , boolean] = [1 , true]

const enum Size{ Small , Medium , Large}
let mySize : Size = Size.Large
console.log(mySize)

function MyFun(mark : number) : number {
    if(mark < 100)
        console.log(mark)
    return mark;
}

type Employee = {
    readonly id:number,
    readonly name:string,
    retire: (date : Date) => void
}

let employee: Employee = {
    id:1 ,
    name:"Mario",
    retire: (date: Date) =>{
    console.log(date)
}}