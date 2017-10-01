import React, { Component , PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createArticle} from '../actions/index';
import { Link } from 'react-router'
import  {Grid ,FormGroup,ControlLabel,FormControl,Button} from 'react-bootstrap';

import axios from 'axios';

import Footer from './common/footer'

class NewArticle extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
         pendingRequest:false,
         title:'',
         category:'',
         picture:'',
         pictureurl:'',
         pictureName:'',
         format:'',
         content:''
      }
    this.handletitleChange = this.handletitleChange.bind(this);
  	this.handlecategoryChange = this.handlecategoryChange.bind(this);
  	this.handlepictureChange = this.handlepictureChange.bind(this);
  	this.handleformatChange = this.handleformatChange.bind(this);
  	this.handlecontentChange = this.handlecontentChange.bind(this);
    this.addArticle = this.addArticle.bind(this);
  }
  componentDidMount(){
    document.title = "CultuMag - New Article";
  }
  addArticle(){
  	let obj = {};
  	obj.title = this.state.title;
  	obj.category = this.state.category;
  	obj.picture = this.state.picture;
  	obj.format = this.state.format;
  	obj.content = this.state.content;
    obj.pictureformat = this.state.pictureurl;
    obj.pictureName = this.state.pictureName;
  	this.props.createArticle(obj);
  	let formData = new FormData();
    formData.append('file', this.state.picture);
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  	axios.post("http://localhost:3000/upload/photo", formData, config)
  }
  handletitleChange = (event) =>{
	this.setState({title:event.target.value});
  }
  handlecategoryChange = (event) =>{
	this.setState({category:event.target.value});
  }
  handlepictureChange = (event) =>{
  let img = event.target.files[0];
	let type = img.name.substr(img.name.lastIndexOf("."),img.name.length);
  this.setState({picture:img});
  this.setState({pictureurl:type});
  this.setState({pictureName:img.name});
  }
  handleformatChange = (event) =>{
	this.setState({format:event.target.value});
  }
  handlecontentChange = (event) =>{
	this.setState({content:event.target.value});
  }
  render() {
  	return(
  		<Grid fluid>
  			<h1>New article</h1>
  			<form>
  				<FormGroup>
  					<ControlLabel>Title</ControlLabel>
  					<FormControl type="text"
  						value={this.state.title}
  						onChange={this.handletitleChange} />
  				</FormGroup>
  				<FormGroup>
  					<ControlLabel>Category</ControlLabel>
  					<FormControl type="text"
  						value={this.state.category}
  						onChange={this.handlecategoryChange}/>
  				</FormGroup>
  				<FormGroup>
  					<ControlLabel>Picture</ControlLabel>
  					<input type="file"
  						onChange={this.handlepictureChange}/>
  				</FormGroup>
  				<FormGroup>
  					<ControlLabel>Format</ControlLabel>
  					<FormControl type="text"
  						value={this.state.format}
  						onChange={this.handleformatChange}/>
  				</FormGroup>
  				<FormGroup>
  					<ControlLabel>Content</ControlLabel>
      				<FormControl componentClass="textarea"
      							 placeholder="Write your content here" 
      							 value={this.state.content}
  								 onChange={this.handlecontentChange}/>
  				</FormGroup>
  				<Button bsStyle="primary"
  						className="pull-xs-right"
  						onClick={() => {this.addArticle()}}
  						>
  						Submit
  				</Button>
  			</form>
  			<Footer/>
  		</Grid>
  	)
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({createArticle}, dispatch);
}

/*function mapStateToProps(state){
  return ({ articleData : state.article.data,fetchArticle:state.article.fetchArticle});
}*/

export default connect(null,mapDispatchToProps)(NewArticle);