import React, { Component } from 'react'
import NoteService from '../services/NoteService'

class ViewNoteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Note: {}
        }
    }

    componentDidMount(){
        NoteService.getNotesById(this.state.id).then( res => {
            this.setState({Note: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h5 className = "text-center"> View Details</h5>
                    <div className = "card-body">
                        <div className = "row">
                            <label><b>Date: </b></label>{'\u00A0'}
                            <div> { this.state.Note.date }</div>
                        </div>
                        <div className = "row">
                            <label><b>Note: </b></label>{'\u00A0'}
                            <div> { this.state.Note.todo }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewNoteComponent
