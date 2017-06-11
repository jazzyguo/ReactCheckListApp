import React from 'react'

class Items extends React.Component {
	checkItem(){
		this.props.checkItem(this.props.item);
	}
	handleDelete(){
		this.props.onDelete(this.props.item);
	}
	render(){
		return( 
			<li className="item media">
			<div className="media-left">
				{this.props.toggle ? <button className="item-delete btn btn-xs btn-danger" onClick={this.handleDelete.bind(this)}>
				<span className="glyphicon glyphicon-minus"></span></button> : ""} 
			</div>
				<div className="item-info media-body">
					<div className="item-head">
						<span className="item-name">{this.props.item.name}</span>
						<span className="item-date pull-right">{this.props.item.date}</span>
						<br />
						<span className="item-time">{this.props.item.startTime} 
						{this.props.item.endTime!=""?" - ":""}{this.props.item.endTime}</span>
						{this.props.item.complete?<button className="btn btn-link pull-right" 
											 	     onClick={this.checkItem.bind(this)}>
											 	     <span className="item-complete glyphicon glyphicon-ok pull-right">
											 	     </span></button>:
												  <button className="btn btn-link pull-right" 
											 	     onClick={this.checkItem.bind(this)}>
											 	     <span className="item-not-complete glyphicon glyphicon-remove pull-right">
											 	     </span></button>}								 
					</div>
					<div className="item-notes">{this.props.item.notes}</div>
				</div>
			</li>
		)
	}
}//Items List

module.exports=Items;