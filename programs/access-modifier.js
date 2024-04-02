var user = /** @class */ (function () {
    function user(userName, userId, status) {
        this.userName = userName;
        this.userId = userId;
        this.status = status;
    }
    user.prototype.setUserId = function (userId) {
        this.userId = userId;
    };
    user.prototype.getUserId = function () {
        return this.userId;
    };
    user.prototype.disp = function () {
        console.log("My name is ".concat(this.userName, " and id No. is ").concat(this.userId, ", status: ").concat(this.status));
    };
    return user;
}());
var userOne = new user('Gazi Nafis', 124, true);
userOne.setUserId(157);
userOne.disp();
// console.log(userOne.status);
console.log(userOne.getUserId());
console.log(userOne.userName);
