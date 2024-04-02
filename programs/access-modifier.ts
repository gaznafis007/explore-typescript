class user{
    userName:string
    private userId:number
    readonly status:boolean
    constructor(userName:string,userId:number, status:boolean){
        this.userName=userName;
        this.userId=userId;
        this.status=status
    }
    setUserId(userId:number){
        this.userId = userId
    }
    getUserId(){
        return this.userId
    }
    disp(){
        console.log(`My name is ${this.userName} and id No. is ${this.userId}, status: ${this.status}`);
    }
}

let userOne = new user('Gazi Nafis', 124, true);
userOne.setUserId(157)
userOne.disp()
// console.log(userOne.status);
console.log(userOne.getUserId());
console.log(userOne.userName);