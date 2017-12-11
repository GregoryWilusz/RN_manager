import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCGQdPMoSbZIb4ylJFOr1v9XzWUmdT5lSk",
            authDomain: "manager-ff351.firebaseapp.com",
            databaseURL: "https://manager-ff351.firebaseio.com",
            projectId: "manager-ff351",
            storageBucket: "manager-ff351.appspot.com",
            messagingSenderId: "1061204707926"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm/>
            </Provider>
        );
    }
}

export default App;