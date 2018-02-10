import React, {Component} from 'react';
// Getting access to an action creator in component = import: connect helper and action creator we want to call.
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props; // taking name, phone, shift OUT of props object.

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' }); // new action creator which we will make. When we call
                                        // employeeCreate, if a shift is not provided, then use Monday like so.
    }

    render() {

        return (
            <Card>
                <EmployeeForm {...this.props} />
                {/*{...this.props} says: take all of the different props that employeeCreate has been passed and forward them on the Employee form as well*/}
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

// making sure that we get attriburtes that are being created by the Form itself => mapStateToProps
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    employeeUpdate, employeeCreate
})(EmployeeCreate);