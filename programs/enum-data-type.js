// numeric enum
var Requests;
(function (Requests) {
    Requests[Requests["getRequest"] = 4] = "getRequest";
    Requests[Requests["postRequest"] = 5] = "postRequest";
    Requests[Requests["putRequest"] = 9] = "putRequest";
    Requests[Requests["deleteRequest"] = 10] = "deleteRequest";
})(Requests || (Requests = {}));
console.log(Requests);
console.log(Requests.getRequest);
console.log(Requests[9]);
console.log(Requests['putRequest']);
// string enum
var Authorization;
(function (Authorization) {
    Authorization["success"] = "Success";
    Authorization["error"] = "fail";
})(Authorization || (Authorization = {}));
// heterogenous enum
var user;
(function (user) {
    user["userName"] = "Gazi Nafis";
    user[user["mobileNumber"] = 12345] = "mobileNumber";
})(user || (user = {}));
// enums are three types, numeric, string, and heterogenous
