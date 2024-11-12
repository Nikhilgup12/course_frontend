import React, { Component } from 'react';

class AddCourse extends Component {
  state = { course_name: '', professor: '', start_date: '', end_date: '' };

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(() => alert('Course added successfully'))
      .then(() => this.props.history.push('/'));
  };

  // Handle input change
  handleChange = (event) => this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="course_name" onChange={this.handleChange} placeholder="Course Name" required />
        <input name="professor" onChange={this.handleChange} placeholder="Professor" required />
        <input name="start_date" onChange={this.handleChange} placeholder="Start Date" required />
        <input name="end_date" onChange={this.handleChange} placeholder="End Date" required />
        <button type="submit">Add Course</button>
      </form>
    );
  }
}

export default AddCourse;