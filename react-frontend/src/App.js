import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListNoteComponent from './components/ListNoteComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateNoteComponent from './components/CreateNoteComponent';
import UpdateNoteComponent from './components/UpdateNoteComponent';
import ViewNoteComponent from './components/ViewNoteComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListNoteComponent}></Route>
                          <Route path = "/notes" component = {ListNoteComponent}></Route>
                          <Route path = "/add-Note/:id" component = {CreateNoteComponent}></Route>
                          <Route path = "/view-Note/:id" component = {ViewNoteComponent}></Route>
                          <Route path = "/update-Note/:id" component = {UpdateNoteComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
