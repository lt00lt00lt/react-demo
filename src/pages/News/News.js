import React, { Component } from 'react'
import NewsList from '../../components/NewsList'

/**
 * 新闻页面
 * @author LongTeng 2019-12-05
 */
export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div>
                <NewsList />
            </div>
        )
    }
}
