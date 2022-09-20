import React, { Component } from 'react'
import NoteService from '../services/NoteService';

class UpdateNoteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            date: '',
            todo: '',
        }
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeTodoHandler = this.changeTodoHandler.bind(this);
        this.updateNote = this.updateNote.bind(this);
    }

    componentDidMount(){
        NoteService.getNotesById(this.state.id).then( (res) =>{
            let note = res.data;
            this.setState({date: note.date,
                todo: note.todo,
            });
        });
    }

    updateNote = (e) => {
        e.preventDefault();
        let note = {date: this.state.date, todo: this.state.todo};
        console.log('note => ' + JSON.stringify(note));
        console.log('id => ' + JSON.stringify(this.state.id));
        NoteService.updateNotes(note, this.state.id).then( res => {
            this.props.history.push('/notes');
        });
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

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Note</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Date: </label>
                                            <input placeholder="Date" name="date" className="form-control" 
                                                value={this.state.date} onChange={this.changeDateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> To DO: </label>
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

export default UpdateNoteComponent
