import React, {Component} from 'react';
// Getting access to an action creator in component = import: connect helper and action creator we want to call.
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import {Card, CardSection, Input, Button} from './common';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        // Last step - making sure that whenever an input's value is changed, we call our employeeUpdate action creator.
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })} // callback in such a fashion
                        // because... see EmployeeActions.
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })} // alternative signature (ES6) to one above
                    />
                </CardSection>

                <CardSection>

                </CardSection>

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

// making sure that we get attriburtes that are being created by the Form itself => mapStateToProps
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);