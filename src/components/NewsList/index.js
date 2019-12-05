import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from "react-router-dom";

/**
 * 新闻列表组件
 * @author LongTeng 2019-12-05
 */
export default class NewsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }

    getData = () => {
        let api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
        Axios.get(api).then(res => {
            this.setState({ list: res.data.result });
        }).catch(e => {
            console.log(e);
        })
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                <h4>新闻列表</h4>
                <hr style={{ border: "dotted" }} />
                <ul>
                    {this.state.list.map((value, key) => {
                        return (<li key={key}><Link to={`/NewsContent/${value.aid}`}>{value.title}</Link></li>)
                    })}
                </ul>
            </div>
        )
    }
}
