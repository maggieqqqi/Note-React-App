import axios from 'axios';

const Note_API_URL = "http://localhost:8080/api/v1/notes";

class NoteService {

    getNotes(){
        return axios.get(Note_API_URL);
    }

    createNotes(Notes){
        return axios.post(Note_API_URL, Notes);
    }

    getNotesById(NotesId){
        return axios.get(Note_API_URL + '/' + NotesId);
    }

    updateNotes(Notes, NotesId){
        return axios.put(Note_API_URL + '/' + NotesId, Notes);
    }

    deleteNotes(NotesId){
        return axios.delete(Note_API_URL + '/' + NotesId);
    }
}

export default new NoteService()