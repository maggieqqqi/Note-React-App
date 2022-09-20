import React, { Component } from 'react'
import NoteService from '../services/NoteService';

class CreatenoteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            date: '',
            todo: '',
        }
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeTodoHandler = this.changeTodoHandler.bind(this);
        this.saveOrUpdatenote = this.saveOrUpdatenote.bind(this);
    }

    // step 3
    componentDidMount(){
        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            NoteService.getNotesById(this.state.id).then( (res) =>{
                let note = res.data;
                this.setState({date: note.date,
                    todo: note.todo,
                });
            });
        }        
    }
    saveOrUpdatenote = (e) => {
        e.preventDefault();
        let note = {date: this.state.date, todo: this.state.todo};
        console.log('note => ' + JSON.stringify(note));

        // step 5
        if(this.state.id === '_add'){
            NoteService.createNotes(note).then(res =>{
                this.props.history.push('/notes');
            });
        }else{
            NoteService.updateNotes(note, this.state.id).then( res => {
                this.props.history.push('/notes');
            });
        }
    }
    
    changeDateHandler= (event) => {
        this.setState({date: event.target.value});
    }

    changeTodoHandler= (event) => {
        this.setState({todo: event.target.value});
    }

    cancel(){
        this.props.history.push('/notes');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add note</h3>
        }else{
            return <h3 className="text-center">Update note</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Date: </label>
                                            <input placeholder="Date" name="date" className="form-control" 
                                                value={this.state.date} onChange={this.changeDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> To Do: </label>
                                            <input placeholder="To DO" name="todo" className="form-control" 
                                                value={this.state.todo} onChange={this.changeTodoHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdatenote}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreatenoteComponent
