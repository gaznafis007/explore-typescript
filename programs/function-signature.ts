let getUserInfo :(info:{name:string, age:number})=> string;

getUserInfo = (info) =>{
    return `My name is ${info.name} and I am ${info.age} years old`
}

const userOne = {
    name: "Mr. Potato",
    age: 26
}

console.log(getUserInfo(userOne))