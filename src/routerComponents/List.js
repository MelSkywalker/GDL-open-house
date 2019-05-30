import React, { Component } from 'react';
import firebase from '../config/FirestoreConfig';
import FormLogin from '../components/FormLogin';
import Navigation from './Navigation';
import Table from '../components/Table';

class Lists extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <div>
              <Navigation />
              <h1>Lista de asistencias</h1>
              <Table />
          </div>
        ) :
          (
            <FormLogin />
          )}
      </div>
    );
  }
}

export default Lists;
