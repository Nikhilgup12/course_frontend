import React, { Component } from 'react';

class CourseCard extends Component {
  handleEdit = () => {
    const { course, history } = this.props;
    history.push(`/update-course/${course.id}`);
  };

  handleDelete = () => {
    const { course } = this.props;
    fetch(`https://course-backend-1-ezqa.onrender.com/${course.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => alert('Course Deleted'))
      .then(() => window.location.reload());
  };

  handleViewAssignments = () => {
    const { course, history } = this.props;
    history.push(`/assignments/${course.id}`);
  };

  render() {
    const { course_name, professor, start_date, end_date } = this.props.course;

    return (
      <div onClick={this.handleViewAssignments}>
        <h2>{course_name}</h2>
        <p>Professor: {professor}</p>
        <p>Start Date: {start_date}</p>
        <p>End Date: {end_date}</p>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default CourseCard;
