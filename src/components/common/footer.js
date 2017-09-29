import React, { Component , PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router'
import  {FormGroup,ControlLabel,FormControl,Button,Grid, Row, Col, Clearfix} from 'react-bootstrap';


const footerContainer = {
	marginTop: '80px',
	height:'150px',
	position:'absolute',
	left:0,
	bottom:0,
	right:0,
	backgroundColor:'#e9e9e9',
	paddingTop:'20px',
	flex: 1,
}

class Footer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
         pendingRequest:false,
      }
  }
  render() {
  	return(
  		<footer style={footerContainer} className='container-fluid'>
  		 	<Row className="show-grid">
      			<Col xs={12} md={8}></Col>
     			<Col xs={6} md={4}>
     				<FormGroup>
  						<ControlLabel>Sign up for CultuMag’s Newsletter</ControlLabel>
  						<Row className="show-grid">
  							<Col xs={12} md={8}>
  								<FormControl type="email"/>
  							</Col>
  							<Col xs={6} md={4}>
  								<Button className="Subscribe">Subscribe</Button>
  							</Col>
  						</Row>
  					</FormGroup>
  				</Col>
    	 	</Row>
  		</footer>)
}
}

/*function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchArticles,fetchArticle}, dispatch);
}

function mapStateToProps(state){
  return ({ articleData : state.article.data,fetchArticle:state.article.fetchArticle});
}*/

export default connect(null,null)(Footer);