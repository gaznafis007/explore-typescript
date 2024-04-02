interface IUser {
    name: string,
    id: number,
    age: number,
    activeStatus: boolean,
    hobbies?: string[]
}

const users : IUser[] = [];

const userOne:IUser = {
    id: 1,
    name: "Mr. Potato",
    age: 26,
    activeStatus: true
}

// Interfac ewith Implements
interface IUserFormatter {
     readUserInfo : ()=> string
}
class user implements IUserFormatter{
    constructor(private userName:string, private age:number){}

    readUserInfo(){
        return `My name is ${this.userName} and I am ${this.age} years old`
    }
    
}

const userTwo = new user("Mr. Tomato", 22);

console.log(userTwo.readUserInfo());