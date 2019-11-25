import React, { Component } from 'react';
import styles from './index.less';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "我是一个Home组件"
        }
    }
    render() {
        return (
            <div>
                <h2>Hello World !</h2>
                <h4 name={this.state.msg} className={styles.fontColorRed}>{this.state.msg}</h4>
                <label htmlFor="name">姓名</label>
                <input id="name" />
                <div styles={{ "color": "blue" }}>行内样式Div</div>
            </div>
        )
    }
}
