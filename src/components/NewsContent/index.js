import React, { Component } from 'react'
import Axios from "axios";
import { Link } from "react-router-dom";
import './index.css'

/**
 * 新闻详情组件
 * @author LongTeng 2019-12-05
 */
export default class NewsContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {},
        }
    }

    getData = (aid) => {
        let api = `http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=${aid}`;
        Axios.get(api)
            .then(res => {
                this.setState({ list: res.data.result[0] })
            })
            .catch(e => {
                console.log(e);
            });
    }

    componentDidMount() {
        /**
         * 通过路径参数获取方法：
         * 1、安装url模块：npm install url --save / yarn add url
         * 2、配置路由与普通路由相同
         * 3、Link中的写法：<Link to={`/NewsContent?aid=${value.aid}`}>{value.title}</Link>，将参数传入
         * 4、获取路径参数：url.parse(this.props.location.search,true).query.aid
         */


        //通过动态路由获取传值
        this.getData(this.props.match.params.aid)
    }

    render() {
        return (
            <div>
                <h4>新闻详情</h4>
                <br />
                <Link to="/News">返回</Link>
                <br />
                <div className="content">
                    <h5>{this.state.list.title}</h5>
                    <div dangerouslySetInnerHTML={{ __html: this.state.list.content }}></div>
                </div>

            </div>
        )
    }
}
