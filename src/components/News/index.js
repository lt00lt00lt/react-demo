import React, { Component } from 'react';
import './index.less';
import logo from '../../assets/images/赤座灯里.jpg';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "新闻",
            list1: ["内容1", "内容2", "内容3"],
            list2: [<h4 key="1">标签内容1</h4>, <h4 key="2">标签内容2</h4>, <h4 key="3">标签内容3</h4>],
            list3: [
                { title: "新闻标题1", content: "新闻详细1" },
                { title: "新闻标题2", content: "新闻详细2" },
                { title: "新闻标题3", content: "新闻详细3" },
            ]
        }
    }
    render() {
        let list = this.state.list1.map((value, key) => {
            return <li key={key}>{value}</li>
        })
        return (
            <div>
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
