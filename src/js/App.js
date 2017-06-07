import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Items from './Items'
import _ from 'lodash'

var editToggle = false; //toggle deletion of cells

class Interface extends React.Component {
	constructor(){
		super();
		this.state = {
    		data:[]
  		}	
	}//Initial state
    componentDidMount() {
	    axios.get('data.json')
	      .then(response => {
	        var data = response.data;
	        this.setState({data});
	      });
	}//load data from json with axios
	delete(item){
		var allItems = this.state.data;
		var newItems = _.without(allItems, item);
		this.setState({data:newItems});
	}//delete item
	render(){
		var items = this.state.data.map((value, key) => 
			<Items item={value} key={key} toggle={editToggle} onDelete={this.delete.bind(this)}/> 
		);
		return (
			<div>
				<div className="item-list media-list">
				<button onClick={()=>(editToggle=!editToggle, this.forceUpdate())}>Edit</button>
					<ul className="item-list media-list">{items}</ul>
				</div>
			</div>
		)
	}//render the main interface
}

ReactDOM.render(<Interface editToggle={false}/>, document.getElementById('checkList'));