var getUserInfo;
getUserInfo = function (info) {
    return "My name is ".concat(info.name, " and I am ").concat(info.age, " years old");
};
var userOne = {
    name: "Mr. Potato",
    age: 26
};
console.log(getUserInfo(userOne));
