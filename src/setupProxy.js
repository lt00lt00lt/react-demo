/**
 * 改文件用于反向代理
 * create-react-app 的版本高于 2.0 版本的时候在 package.json 只能配置 string 类型
 * 解决方案：安装http-proxy-middleware
 * 新版的代理配置，是通过 /src/setupProxy.js 这个文件来配置的。
 * @author LongTeng 2019-12-12
 */
const proxy = require("http-proxy-middleware");

/*
    参数说明
    '/api'
    捕获API的标志，如果API中有这个字符串，那么就开始匹配代理，
    比如API请求/api/users, 会被代理到请求 http://www.baidu.com/api/users 。

    target
    代理的API地址，就是需要跨域的API地址。
    地址可以是域名,如：http://www.baidu.com
    也可以是IP地址：http://127.0.0.1:3000
    如果是域名需要额外添加一个参数changeOrigin: true，否则会代理失败。

    pathRewrite
    路径重写，也就是说会修改最终请求的API路径。
    比如访问的API路径：/api/users,
    设置pathRewrite: {'^/api' : ''},后，
    最终代理访问的路径：http://www.baidu.com/users，
    这个参数的目的是给代理命名后，在访问时把命名删除掉。

    changeOrigin
    这个参数可以让target参数是域名。

    secure
    secure: false,不检查安全问题。
    设置后，可以接受运行在 HTTPS 上，可以使用无效证书的后端服务器
*/
module.exports = function (app) {
    app.use(proxy("/api", {
        target: "http://localhost:7001", //配置你要请求的服务器地址
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/api": "/"
        },
    }));
};
