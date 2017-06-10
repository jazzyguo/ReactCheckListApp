import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Items from './Items'
import AddItem from './AddItem'
import _ from 'lodash'

class Interface extends React.Component {
	constructor(){
		super();
		this.state = {
    		data:[],
    		editToggle:false,
    		formToggle:false
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
		var data = _.without(this.state.data, item);
		this.setState({data});
	}//delete item
	render(){
		var items = this.state.data.map((value, key) => 
			<Items item={value} key={key} 
			       toggle={this.state.editToggle} 
			       onDelete={this.delete.bind(this)}/> 
		);
		return (
			<div>
				<AddItem formToggle={this.state.formToggle} 
						 handleToggle={()=>(this.setState({formToggle:!this.state.formToggle}))} />
				<div className="item-list media-list">
				<button className="pull-left" 
				        onClick={()=>(this.setState({editToggle:!this.state.editToggle}))}>Edit</button>
					<ul className="item-list media-list">{items}</ul>
				</div>
			</div>
		)
	}//render the main interface
}

ReactDOM.render(<Interface editToggle={false}/>, document.getElementById('checkList'));