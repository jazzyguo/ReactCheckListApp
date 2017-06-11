import React from 'react'

class SearchItems extends React.Component{
	handleSearch(e){
		this.props.onSearch(e.target.value);
	}
	handleSort(e){
		this.props.onReOrder(e.target.id, this.props.orderDir);
	}
	handleOrder(e){
		this.props.onReOrder(this.props.orderBy, e.target.id);
	}
	render(){
		return (
			<div id="searchBar" className="row search-appointment">
                    <div className="input-group">
                        <input id="SearchItems" onChange={this.handleSearch.bind(this)} 
                        	   placeholder="Search" type="text" className="form-control" aria-label="Search Items" />
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-primary dropdown-toggle"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a href="#" id="name" onClick={this.handleSort.bind(this)}>Name 
                                    {this.props.orderBy==="name"?<span className="glyphicon glyphicon-ok"></span>:""}</a></li>
                                    <li><a href="#" id="date" onClick={this.handleSort.bind(this)}>Date 
                                    {this.props.orderBy==="date"?<span className="glyphicon glyphicon-ok"></span>:""}</a></li>
                                    <li><a href="#" id="complete" onClick={this.handleSort.bind(this)}>Complete 
                                    {this.props.orderBy==="complete"?<span className="glyphicon glyphicon-ok"></span>:""}</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#" id="asc" onClick={this.handleOrder.bind(this)}>Asc 
                                    {this.props.orderDir==="asc"?<span className="glyphicon glyphicon-ok"></span>:""}</a></li>
                                    <li><a href="#" id="desc" onClick={this.handleOrder.bind(this)}>Desc 
                                    {this.props.orderDir==="desc"?<span className="glyphicon glyphicon-ok"></span>:""}</a></li>
                                </ul>
                    </div>
                </div>
            </div>
		)
	}
}



module.exports=SearchItems;