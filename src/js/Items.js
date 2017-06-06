import React from 'react'

class Items extends React.Component {
	render(){
		return( 
			<li className="item media">
			<div className="media-left">
				{this.props.toggle===true?<button className="item-delete btn btn-xs btn-danger" onClick={this.handleDelete}>
				<span className="glyphicon glyphicon-minus"></span></button>:""} 
			</div>
				<div className="item-info media-body">
					<div className="item-head">
						<span className="item-name">{this.props.item.name}</span>
						<span className="item-date pull-right">{this.props.item.date}</span>
						<br />
						<span className="item-time">{this.props.item.startTime} 
						{this.props.item.endTime!=""?" - ":""}{this.props.item.endTime}</span>
					</div>
					<div className="item-notes">{this.props.item.notes}</div>
				</div>
			</li>
		)
	}
}//Items List

module.exports=Items;