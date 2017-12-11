import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from "../actions";

class LoginForm extends Component {

    // Event handler method, it's like GLUECODE
    onEmailChange(text) {
        this.props.emailChanged(text); // we have an access to the prop because we wired App ann action creator using
                                        // connect() helper. It's equivalent to setState!
    }

    onPasswordChange(text) { // when it's called we call an Action Creator
        this.props.passwordChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Emal"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)} // Because is a callback where we are going
                                                // to make reference to (this), we are going to bind the context.
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { email, password } = state.auth;

     return {
         email: email,
         password: password
     };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);