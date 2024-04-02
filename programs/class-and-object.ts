class userInfo{
    userName:string
    userId:number
    constructor(userName:string,userId){
        this.userName = userName;
        this.userId = userId;
    }
    display(){
        const user={
            userName:this.userName,
            userId:this.userId
        }
        return user
    }
}

const userMe = new userInfo('Gazi Nafis', 123)

console.log(userMe.display());
console.log(userMe.userName);
console.log(userMe.userId);