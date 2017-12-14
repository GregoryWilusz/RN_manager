import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from "../actions";

class LoginForm extends Component {

    // Event handler method, it's like GLUECODE
    onEmailChange(text) {
        this.props.emailChanged(text); // we have an access to the prop because we wired App ann action creator using
        // connect() helper. It's equivalent to setState!
    }

    onPasswordChange(text) { // when it's called we call an Action Creator
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {email, password} = this.props; // deconstruction

        this.props.loginUser({email, password}); // we set up the method signature to log in user to expect an object
        // with email and password properties
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large"/>;
        } else {
            return (
                <Button whenPressed={this.onButtonPress.bind(this)}>
                    Login
                </Button>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
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

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = state => {
    const {email, password, error, loading} = state.auth;

    return {
        email: email,
        password: password,
        error: error,
        loading: loading
    };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);