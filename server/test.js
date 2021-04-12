let flag = true
setTimeout(function () {
    flag = false
}, 3000)
console.log("start")
while (flag) {
    
    //模拟发送http请求
    var request = require("request");
    //get请求
    request('http://localhost:3000/admin/api/rest/getData', function (error, response, body) {
        console.log('------------------')
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the baidu homepage.
        }
    });
}
console.log("end")