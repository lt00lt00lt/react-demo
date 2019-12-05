import React, { Component } from 'react';
import './index.css';
import logo from '../../assets/images/赤座灯里.jpg'

/**
 * 学习基础组件
 * 绑定属性注意：
 * 1、class=》className
 * 2、for=》htmlFor
 * 3、行内样式style里用对象
 * @author LongTeng 2019-11-30
 */
export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "我是一个Demo组件",
            list1: ["内容1", "内容2", "内容3"],
            list2: [<h4 key="1">标签内容1</h4>, <h4 key="2">标签内容2</h4>, <h4 key="3">标签内容3</h4>],
            list3: [
                { title: "新闻标题1", content: "新闻详细1" },
                { title: "新闻标题2", content: "新闻详细2" },
                { title: "新闻标题3", content: "新闻详细3" },
            ]
        }
    }
    run() {
        alert("我是一个方法");
    }
    render() {
        let list = this.state.list1.map((value, key) => {
            return <li key={key}>{value}</li>
        })
        return (
            <div>
                <h2>Hello World !</h2>
                <button onClick={this.run}>获取数据</button>
                <h4 name={this.state.msg} className="fontColorRed">{this.state.msg}</h4>
                <label htmlFor="name">姓名</label>
                <input id="name" />
                <div style={{ color: "blue" }}>行内样式Div</div>
                <br />
                {this.state.msg}
                <br />
                <img className="img" alt="logo" src={logo} />
                <br />
                <img className="img" alt="logo" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574657013270&di=f50b5a5585285310f1104213af97c863&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201507%2F04%2F20150704212949_PSfNZ.jpeg" />
                <hr />
                <ul>
                    {list}
                </ul>
                {this.state.list2}

                <hr />
                <ul>
                    {
                        this.state.list3.map((value, key) => {
                            return (<li key={key}>{value.title}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
