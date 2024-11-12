import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Courses from './components/Courses';
import Assignments from './components/Assignments';
import AddCourse from './components/AddCourse';
import UpdateCourse from './components/UpdateCourse';
import AddAssignment from './components/AddAssignment';
import UpdateAssignment from './components/UpdateAssignment';

class App extends React.Component {
  render() {
    return (
      
        <Switch>
          <Route exact path="/" component={Courses} />
          <Route path="/assignments/:courseId" component={Assignments} />
          <Route path="/add-course" component={AddCourse} />
          <Route path="/update-course/:id" component={UpdateCourse} />
          <Route path="/add-assignment/:courseId" component={AddAssignment} />
          <Route path="/update-assignment/:id" component={UpdateAssignment} />
        </Switch>
      
    )
  }
}

export default App;
