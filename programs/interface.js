var users = [];
var userOne = {
    id: 1,
    name: "Mr. Potato",
    age: 26,
    activeStatus: true
};
var user = /** @class */ (function () {
    function user(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    user.prototype.readUserInfo = function () {
        return "My name is ".concat(this.userName, " and I am ").concat(this.age, " years old");
    };
    return user;
}());
var userTwo = new user("Mr. Tomato", 22);
console.log(userTwo.readUserInfo());
