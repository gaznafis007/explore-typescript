var userInfo = /** @class */ (function () {
    function userInfo(userName, userId) {
        this.userName = userName;
        this.userId = userId;
    }
    userInfo.prototype.display = function () {
        var user = {
            userName: this.userName,
            userId: this.userId
        };
        return user;
    };
    return userInfo;
}());
var userMe = new userInfo('Gazi Nafis', 123);
console.log(userMe.display());
console.log(userMe.userName);
console.log(userMe.userId);
