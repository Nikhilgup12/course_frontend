import React, { Component } from 'react';
import CourseCard from '../CourseCard';

class Courses extends Component {
  state = {
    courses: [],
  };

  // API call to fetch courses
  fetchCourses = () => {
    fetch('https://course-backend-1-ezqa.onrender.com/courses', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => this.setState({ courses: data }))
      .catch((error) => console.error('Error fetching courses:', error));
  };

  // Navigate to the Add Course page
  handleAddCourse = () => {
    this.props.history.push('/add-course');
  };

  componentDidMount() {
    this.fetchCourses();
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <button onClick={this.handleAddCourse}>Add Course</button>
        <div>
          {this.state.courses.map((course) => (
            <CourseCard key={course.id} course={course} history={this.props.history} />
          ))}
        </div>
      </div>
    );
  }
}

export default Courses;
