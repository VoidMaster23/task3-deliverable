import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Login from './components/Login';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmplEdit from './components/EmplEdit';

//this specifies how different screens will be shown
const RouterComp = () => {
  return (
    //parent
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={Login} title="Login" />
        </Scene>

        <Scene key="main">
          <Scene
            key="emplList"
            rightTitle="Add"
            onRight={() => {
              Actions.employeeCreate();
            }}
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Add an Employee"
          />
          <Scene
            key="employeeEdit"
            component={EmplEdit}
            title="Edit Employee Details"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComp;
