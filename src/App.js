import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; // take the middleware and do sth with it
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; // is a middleware so we need to apply helper from redux
import reducers from './reducers';
import Router from './Router';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); // {} is for an initial state we may want
        // to pass to our redux app. Third arg is a store enhancer.

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;