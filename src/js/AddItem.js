import React from 'react'

class AddItem extends React.Component {
	toggleForm(){
		this.props.handleToggle();
	}
	handleAdd(event){
		var item = {
			"name": this.refs.inputItemName.value,
    		"date": this.refs.inputDate.value,
    		"startTime": this.refs.inputStartTime.value,
   		 	"endTime": this.refs.inputEndTime.value,
    		"notes": this.refs.itemInfo.value,
    		"complete":false
		}
		//clear inputs after submission
		this.refs.inputItemName.value = 'Task Name';
		this.refs.inputDate.value = '';
    	this.refs.inputStartTime.value = '';
   		this.refs.inputEndTime.value = '';
    	this.refs.itemInfo.value = 'Notes'
		event.preventDefault();
		this.props.addItem(item);
	}//creates new item from form submission
	render(){
		var display = {
			display: this.props.formToggle ? 'block':'none'
		}
		return (
				<div className="panel panel-primary">
                <div className="panel-heading item-addheading" onClick={this.toggleForm.bind(this)}>
                <span className="glyphicon glyphicon-plus"></span> Add Task</div>
                <div className="panel-body" style={display}>
                    <form className="add-item form-horizontal" onSubmit={this.handleAdd.bind(this)}>
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Task Name</label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control"
                                    id="itemName" ref="inputItemName" placeholder="Task Name" />
                            </div>
                            <label className="col-sm-2 control-label">Date</label>
                            <div className="col-sm-4">
                                <input type="date" className="form-control"
                                    id="item-date" ref="inputDate" />
                            </div>
                            <label className="col-sm-2 control-label">Start-Time</label>
                            <div className="col-sm-4">
                                <input type="time" className="form-control"
                                    id="item-start-time" ref="inputStartTime" />
                            </div>
                            <label className="col-sm-2 control-label">End-Time</label>
                            <div className="col-sm-4">
                                <input type="time" className="form-control"
                                    id="item-end-time" ref="inputEndTime" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label">Notes</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" rows="4" cols="50"
                                    id="item-info" ref="itemInfo" placeholder="Notes"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-primary pull-right">Add Task</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
		)
	}
}

module.exports = AddItem;