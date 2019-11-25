import React, { Component } from 'react';
import  './index.less';

/**
 * 绑定属性注意：
 * 1、class=》className
 * 2、for=》htmlFor
 * 3、行内样式style里用对象
 */
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "我是一个Home组件"
        }
    }
    run(){
        alert("我是一个方法");
    }
    render() {
        return (
            <div>
                <h2>Hello World !</h2>
                <button onClick={this.run}>获取数据</button>
                <h4 name={this.state.msg} className="fontColorRed">{this.state.msg}</h4>
                <label htmlFor="name">姓名</label>
                <input id="name" />
                <div style={{ color: "blue" }}>行内样式Div</div>
            </div>
        )
    }
}
