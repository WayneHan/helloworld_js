var http = require('http');    //require node.js自带的http模块
var url = require("url");

function start(route){
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + 'received');

        route(pathname);

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('helloworld');
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('Server has started');
}

exports.start = start;

/*http.createServer(function (request, response){ //调用http模块提供的函数createServer
    //发送http头部
    //http 状态值：200:OK
    //内容类型：text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    //发送相应数据“hello world”
    response.end('hello world\n');
}).listen(8888)

//终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/')*/