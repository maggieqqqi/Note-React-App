import React, { Component } from 'react';
import NoteService from '../services/NoteService';
import '../App.css';

class ListNoteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Notes: []
        }
        this.addNote = this.addNote.bind(this);
        this.editNote = this.editNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }
     componentDidMount(){
        NoteService.getNotes().then((res) => {
            this.setState({Notes: res.data});
        });
    }

    deleteNote(id){
        NoteService.deleteNotes(id).then( res => {
            this.setState({Notes: this.state.Notes.filter(Note => Note.id !== id)});
        });
    }
    viewNote(id){
        this.props.history.push(`/view-Note/${id}`);
    }
    editNote(id){
        this.props.history.push(`/add-Note/${id}`);
    }
    addNote(){
        this.props.history.push('/add-Note/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Notes List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addNote}> Add Note</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>TO DO</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Notes.map(
                                        Note => 
                                        <tr key = {Note.id}>
                                             <td> { Note.date} </td>   
                                             <td> {Note.todo}</td>
<ty><e></e></ty>
                                             <td>
                                                 <button onClick={ () => this.editNote(Note.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewNote(Note.id)} className="btn btn-info">View </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteNote(Note.id)} className="btn btn-danger">Delete </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListNoteComponent
