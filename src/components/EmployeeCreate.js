import React, {Component} from 'react';
import { Picker, Text } from 'react-native';
// Getting access to an action creator in component = import: connect helper and action creator we want to call.
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props; // taking name, phone, shift OUT of props object.

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' }); // new action creator which we will make. When we call
                                        // employeeCreate, if a shift is not provided, then use Monday like so.
    }

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

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerLabelStyle}>Shift</Text>
                    <Picker
                        // style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
                {/*onButtonPress helper method is a callback, so we need to bind the context*/}
                <CardSection>
                    <Button whenPressed={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

// making sure that we get attriburtes that are being created by the Form itself => mapStateToProps
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    employeeUpdate, employeeCreate
})(EmployeeCreate);