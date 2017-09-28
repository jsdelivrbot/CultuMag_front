import React, { Component , PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchArticles,fetchArticle} from '../actions/index';
import { Link } from 'react-router'

class Articles extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
         pendingRequest:false,
      }
    this.viewArticle = this.viewArticle.bind(this);
  }

  static contextTypes = {
    router : PropTypes.object
  }

  componentWillMount(){
    this.props.fetchArticles();
  }

  viewArticle = (event,data) =>{
    this.props.fetchArticle(data).then(() => { 
        this.context.router.push('/article/'+data);
      })
  }
  renderArticles(){
    if(!this.props.articleData){
      return <li key="id0">Loading...</li> 
    }
    else if(this.props.articleData.length == 0){
      return <li key="id0">No Data to fetch</li>
    }
    else{
      return this.props.articleData.map((article)=>{
        return(<li className="list-group-item" key={article._id}>
          <p> <strong>{article.Title}</strong><span className="pull-xs-right">{article.category}</span></p>
          <img src={article.Picture}></img>
          <p>{article.Date}</p>
          <p>{article.Content}</p>
          <button type="button" 
                  className="btn btn-warning" 
                  dataId={article._id}
                  onClick={(e) => {article.viewArticle(event,article._id)}}
          >
          View Article
          </button>
        </li>)
      })
    }
  }

	render() {
    return (
      <div className="container">
      <div className="pull-right control-group">
      <Link to="create_article" >
       <button type="button" 
                  className="btn btn-primary " 
                  /*onClick={(e) => {this.props.logout}}*/
          >
          Create a new Article
          </button>
        </Link>
        </div>
        <ul className="list-group">
          {this.renderArticles()}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchArticles,fetchArticle}, dispatch);
}

function mapStateToProps(state){
  return ({ articleData : state.article.data,fetchArticle:state.article.fetchArticle});
}

export default connect(mapStateToProps,mapDispatchToProps)(Articles);