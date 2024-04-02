abstract class user{
    userName:string
    userId:number
    constructor(userName:string,userId:number){
        this.userName=userName;
        this.userId=userId;
    }
    disp(){
       
    }
}

class admin extends user {
    admin: boolean
    // userName:string
    // userId: number;
    constructor(admin:boolean, userName:string, userId:number){
        super(userName, userId);
        this.admin=admin;
    }
    disp(): void {
        console.log(`Hello I'm ${this.userName} and ${this.admin ? 'I am an admin' : "I am not an admin"}`);
    }
}
const adminInfo = new admin(false, 'Gazi Nafis', 123)

adminInfo.disp()