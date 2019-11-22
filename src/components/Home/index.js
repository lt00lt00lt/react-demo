import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state({
            msg: "我是一个Home组件"
        })
    }
    render() {
        return (
            <div>
                <h2>Hello World !</h2>
                <h4>{this.state.msg}</h4>
            </div>
        )
    }
}
