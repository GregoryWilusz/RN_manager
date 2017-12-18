import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { employeesFetch } from '../actions/';

class EmployeeList extends Component {
    // This component will be unmounted and gone  when the user change the screen. When he back here, it's going to render a new instance
    // of employeeList.

    componentWillMount() {              // when the component is about to be rendered, componentWillBeMount will be called
        this.props.employeesFetch();    // we immediately tell our ActionCreator to go fetch our list of employees (async. request)

        this.createDataSource(this.props);
    }

    // This method will be called whenever we are about to receive a new set of props to rerun the component with,
    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component will be rendered with. this.props is still the old set of props.

        this.createDataSource(nextProps) // we handle two cases (componentWillMount and WillReceiveProps) WE ALWAYS BE ATTEMPTING OUR
                                        // DATA SOURCE
    }

    createDataSource({ employees }) {               // Destruction of this.props.employees
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataStore = ds.cloneWithRows(employees); // creating data source at this point in time, for each time we get a new list of users
        // we will recreate our data source. cloneWithRows expects to be passed an array of object to work with! That is why we used lodash.
        // then we try to make access to this.props.employees, but it will be empty by the time we get to this line of code, because our
        // actual request to fetch a list of employees is probably not going to complete just yet.
    }

    render() {
        console.log(this.props);

        return (
            <View>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
// Expln 1: state.employees is here an object of employees. For every key-value pair (element) in that object, we are going to take the employee
// model (represented here with just 'val' and the user id ('uid') then return an object containing the properties of the employee model
// and the user id.

// Expln 2: state.employees is an object and has many key-value pairs. For each key-value pair (iterated by map func) run this fat arrow
// function which will be called with each value and key. And the key here is an ID of the record. Val is a user model, so it has a
    // NAME, SHIFT, and PHONE properties. Then we return a new object, push in all the values (val) from the user model and we also throw
    // the ID (uid) on top. THEN we collect all this object and put them into array which is then assigned to employees. The last step,
    // the MAP putting them into an array automatically.
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }; // output for example: { shift: 'Monday', name: 'Sylvia', id: '...' }
    });

    return {employees}; // we get an array
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);