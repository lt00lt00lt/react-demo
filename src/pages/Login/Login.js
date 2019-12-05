import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

/**
 * 登录页面
 * 用JS实现页面跳转：引入redirect
 * @author LongTeng 2019-12-05
 */
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginFlag: false,
        }
    }
    doLogin = (e) => {
        e.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        if (username === "admin" && password === "123456") {
            //登录成功，跳转页面
            this.setState({ loginFlag: true });
        } else {
            alert("登录失败，用户名或密码错误！");
        }
    }
    render() {
        if (this.state.loginFlag) {
            // return <Redirect to={{ pathname: "/" }} />
            return <Redirect to="/" />
        }
        return (
            <div>
                <form onSubmit={this.doLogin}>
                    用户名：<input ref="username" type="text"/>
                    <br/>
                    密码：<input ref="password" type="password" />
                    <br/>
                    <input type="submit" value="登录" />
                </form>
            </div>
        )
    }
}
