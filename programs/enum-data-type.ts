// numeric enum
enum Requests  {
    getRequest=4,
    postRequest,
    putRequest=9,
    deleteRequest
}

console.log(Requests);
console.log(Requests.getRequest);
console.log(Requests[9]);
console.log(Requests['putRequest']);


// string enum
enum Authorization{
    success='Success',
    error='fail'
}

// heterogenous enum
enum user{
    userName='Gazi Nafis',
    mobileNumber=12345
}

// enums are three types, numeric, string, and heterogenous