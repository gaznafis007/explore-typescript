var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = /** @class */ (function () {
    function user(userName, userId) {
        this.userName = userName;
        this.userId = userId;
    }
    user.prototype.disp = function () {
    };
    return user;
}());
var admin = /** @class */ (function (_super) {
    __extends(admin, _super);
    // userName:string
    // userId: number;
    function admin(admin, userName, userId) {
        var _this = _super.call(this, userName, userId) || this;
        _this.admin = admin;
        return _this;
    }
    admin.prototype.disp = function () {
        console.log("Hello I'm ".concat(this.userName, " and ").concat(this.admin ? 'I am an admin' : "I am not an admin"));
    };
    return admin;
}(user));
var adminInfo = new admin(false, 'Gazi Nafis', 123);
adminInfo.disp();
