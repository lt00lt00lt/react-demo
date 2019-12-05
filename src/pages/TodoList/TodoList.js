import React, { Component } from 'react';
import './TodoList.css';
import Storage from '../../util/storage'

/**
 * 待办事项页面
 * @author LongTeng 2019-12-05
 */
export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { title: "学习React", checked: true },
                { title: "学习Vue", checked: true },
                { title: "学习Angular", checked: false },
                { title: "学习Node", checked: false }
            ],
        }
    }

    addList = (e) => {
        //按下回车的时候请假数据
        if (e.keyCode === 13) {
            let title = this.refs.title.value
            let tempList = this.state.list;
            tempList.push({
                title,
                checked: false
            });
            //改变后的值赋值给list
            this.setState({
                list: tempList,
            });
            //保存缓存数据
            Storage.set("TodoList", tempList);
            //让input输入框的值重置为空
            this.refs.title.value = "";
        }
    }

    //删除列表方法
    removeList = (key) => {
        let tempList = this.state.list;
        tempList.splice(key, 1);
        this.setState({
            list: tempList,
        });
        //保存缓存数据
        Storage.set("TodoList", tempList);
    }

    //点击Checkbox切换列表方法
    checkboxChange = (key) => {
        let tempList = this.state.list;
        tempList[key].checked = !tempList[key].checked;
        this.setState({
            list: tempList,
        });
        //保存缓存数据
        Storage.set("TodoList", tempList);
    }

    componentDidMount() {
        //从缓存中获取数据
        let list = Storage.get("TodoList");
        if (list) {
            this.setState({ list });
        }
    }

    render() {
        return (
            <div>
                添加代办事项
                <input ref="title" onKeyUp={this.addList} />
                按回车键添加
                <hr style={{ border: "dotted" }} />
                <h4>待办事项</h4>
                <hr style={{ border: "dotted" }} />
                <ul className="list">
                    {this.state.list.map((value, key) => {
                        if (!value.checked) {
                            return (
                                <li key={key}><input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this, key)} />{value.title} --- <button onClick={this.removeList.bind(this, key)}>删除</button></li>
                            )
                        } else {
                            return "";
                        }
                    })}
                </ul>
                <hr style={{ border: "dotted" }} />
                <h4>已完成事项</h4>
                <ul className="list">
                    {this.state.list.map((value, key) => {
                        if (value.checked) {
                            return (
                                <li key={key}><input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this, key)} />{value.title} --- <button onClick={this.removeList.bind(this, key)}>删除</button></li>
                            )
                        } else {
                            return "";
                        }
                    })}
                </ul>
            </div>
        )
    }
}
