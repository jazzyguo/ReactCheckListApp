import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Items from './Items'
import AddItem from './AddItem'
import SearchItems from './SearchItems'
import _ from 'lodash'

class Interface extends React.Component {
	constructor(){
		super();
		this.state = {
    		data:[],
    		editToggle:false,
    		formToggle:false,
    		orderBy:'date',
    		orderDir:'asc',
    		query:""
  		}	
	}//Initial state
    componentDidMount() {
	    axios.get('data.json')
	      .then((response) => {
	        var data = response.data;
	        this.setState({data});
	      });
	}//load data from json with axios
	delete(item){
		var data = _.without(this.state.data, item);
		this.setState({data});
	}//delete item
	addItem(item){
		var data = this.state.data;
		data.push(item);
		this.setState({data});
	}//add item
	checkItem(item){
		item.complete = !item.complete;
		this.setState({});
	}//check item
	reOrder(orderBy, orderDir){
		this.setState({orderBy:orderBy, orderDir:orderDir});
	}//reorder items
	searchItems(query){
		this.setState({query:query});
	}//search items
	render(){
		var items = [];
		var orderBy = this.state.orderBy;
		var orderDir = this.state.orderDir;
		var query = this.state.query;
		var data = this.state.data;
		data.forEach(function(item){
			if( (item.name.toLowerCase().indexOf(query)!=-1) ||
				(item.date.toLowerCase().indexOf(query)!=-1) ||
				(item.endTime.toLowerCase().indexOf(query)!=-1) ||
				(item.startTime.toLowerCase().indexOf(query)!=-1) ||
				(item.notes.toLowerCase().indexOf(query)!=-1) 
				){
				items.push(item);
			}
		});
		//sort items
		items = _.orderBy(items,(item)=>item[orderBy],orderDir);
		//iterate through items
		items = items.map((value, key) => 
			<Items item={value} key={key} 
			       toggle={this.state.editToggle} 
			       onDelete={this.delete.bind(this)} 
			       checkItem={this.checkItem.bind(this)} /> 
		);
		return (
			<div>
				<AddItem formToggle={this.state.formToggle} 
						 handleToggle={()=>(this.setState({formToggle:!this.state.formToggle}))} 
						 addItem = {this.addItem.bind(this)} />				
				<button id="editButton" className="pull-left" 
						onClick={()=>(this.setState({editToggle:!this.state.editToggle}))}>Edit</button>
				<SearchItems orderBy={this.state.orderBy} 
							 orderDir={this.state.orderDir} 
							 onReOrder={this.reOrder.bind(this)}
							 onSearch={this.searchItems.bind(this)} />
				<div className="item-list media-list">
					<ul className="item-list media-list">{items}</ul>
				</div>
			</div>
		)
	}//render the main interface
}

ReactDOM.render(<Interface />, document.getElementById('checkList'));