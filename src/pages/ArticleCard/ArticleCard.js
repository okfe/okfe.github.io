/**
 * @desc [每一个文章card]
 */
import React from 'react';
import './ArticleCard.less';
import api from '../api/index';

const issueList = api.getIssueList();
class ArticleCard extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
             <header className="App-header">
                {
                    issueList.map(function(issue,index){
                        return (
                            <div key={index}>
                                <div className="article-card">
                                    <span className="article-title">{issue.title}</span>
                                <div className="article-info">
                                    <span className="article-author">{issue.author || '暂无作者信息'}</span>
                                    <span className="article-date">{issue.created_at}</span>
                                </div>
                                <p className="article-outline"> {issue.outline || '暂无文章缩略信息'} </p>
                                <div className="article-detail">
                                    <a className="article-detail" href= {`/#/details/${issue.id}`}>继续阅读</a>
                                    <i className="fa fa-angle-double-right fa-lg"></i>
                                </div>
                                </div>
                            </div>
                        )
                    })
                }
            </header>
        )
    }
}


export default ArticleCard;
