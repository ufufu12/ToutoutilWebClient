import React from 'react';
import ReactDOM from 'react-dom';
import ToolsItems from '../items/ToolsItems';
import CategoryItems from '../items/CategoryItems';
// React DevTools 
import {
  Route
  //NavLink,
  //HashRouter,
  //Switch
}
from 'react-router-dom';
class Content2 extends React.Component
{
	constructor(props){
		super(props);
		this.state={
			category:'',
			//tools:[{}]
			tools:[{},{},{},{},{},{}]
		}
	}
	LoadItemsRentals(e){
		//this.setState({category:val})
		alert("HEHEHEH");
		this.setState({category:'OK'})
	}
	GetAllRentals=() =>{
		//const {handle} = this.props.match.params;
		//const handle=2;
		//fetch(`http://localhost:52424/Rentals/Rentalsservice.svc/rentals/'${handle}`)
		fetch('http://localhost:52424/Rentals/Rentalsservice.svc/rentals/')
		.then(response =>response.json())
		.then((data)=>{
			this.setState({tools:data});
		})
	}
	GetAllRentalsBy=(item) =>{
		//const {handle} = this.props.match.params;
		
		//const handle=2;
		//fetch(`http://localhost:52424/Rentals/Rentalsservice.svc/rentals/'${handle}`)
		
		fetch('http://localhost:52424/Rentals/Rentalsservice.svc/rentals/2')
		.then(response =>response.json())
		.then((data)=>{
			this.setState({tools:data});
		})
	}
	componentDidMount(){
		this.GetAllRentals();
	}
	componentWillMount(){
	}
	render()
	{	
	//const tools=[{},{}] 		/*id="Content*/	
	return(
	    <div className="container" style={{borderWidth:'3px'}}> 
			<div className="row">
				<CategoryItems GetAllRentalsBy={this.GetAllRentalsBy} />	
			</div>
			<div className="row">
				<h4 style={{fontcolor:'#fff'}}>{this.state.category}</h4>
			</div>		
		    <div className="row" style={{backgroundColor:'#000','borderBottom':'3', 'marginBottom': '3 px', 'marginTop':'15 px'}}>
				<div className="col-md-4" style={{'border':'1px dashed'}}>
					<div><h4>111</h4></div>
					<span className="time"> An Hour Ago </span>
						<p> Ate Lunch </p>
						<div className="commentCount">
						2
						</div>
					<div className="avatar">
						<img
						src= "http://localhost:3000/images/itemMain.png"/>
					</div>
				</div>
				
				<div className="col-md-4" style={{'border':'0px dashed'}}>
					<div><h4>2222</h4></div>
					<span className="time"> An Hour Ago </span>
						<p> Ate Lunch </p>
						<div className="commentCount">
						2
						</div>
					<div className="avatar">
						<img style={{borderLeft:'2px'}}
						src= "http://localhost:3000/images/itemMain.png"/>
					</div>
				</div>
				
				<div className="col-md-4"  style={{'border':'0px dashed'}}>
						<div><h4>3333</h4></div>
					<span className="time"> An Hour Ago </span>
						<p> Ate Lunch </p>
						<div className="commentCount">
						2
						</div>
						<div className="avatar">
							<img className="img-responsive" height="25 px" width="30 px" src= "http://localhost:3000/images/itemMain.png"/>
						</div>
				</div>
			</div>
			<div className="row">
				<ToolsItems tools={this.state.tools} />
			</div>
			<div className="row">Page 1 -
			</div>
	    </div>
	);	
  }
}
export default Content2;
/*



<CategoryItems category={this.state.category}/>
<CategoryItems clickHander={this.LoadItemsRentals} />	
<CategoryItems clickHander={this.LoadItemsRentals} />
*/