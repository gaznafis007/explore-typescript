type User={
    userName:string,
    userId: number,
    status:boolean,
    parents?: {mother:string, father:string},
    hobbies?: string[],
    passingYear?: number[]
}

const userOne:User = {
    userName: 'Gazi Nafis',
    userId: 12345,
    status: true,
    parents:{
        father: "Gazi",
        mother: 'Akter'
    }
}
console.log(userOne);

console.log(userOne.parents?.father);