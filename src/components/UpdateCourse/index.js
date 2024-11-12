import React, { Component } from 'react';

class UpdateCourse extends Component {
  state = { course_name: '', professor: '', start_date: '', end_date: '' };


  fetchCourseData = (id) => {
    fetch(`https://course-backend-1-ezqa.onrender.com/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => this.setState({ ...data }))
      .catch((error) => console.error('Error fetching course:', error));
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const { id } = this.props.match.params;
    fetch(`https://course-backend-1-ezqa.onrender.com/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(() => alert('Course updated successfully'))
      .then(() => this.props.history.push('/'));
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchCourseData(id);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="course_name" onChange={(e) => this.setState({ course_name: e.target.value })} value={this.state.course_name} placeholder="Course Name" required />
        <input name="professor" onChange={(e) => this.setState({ professor: e.target.value })} value={this.state.professor} placeholder="Professor" required />
        <input name="start_date" onChange={(e) => this.setState({ start_date: e.target.value })} value={this.state.start_date} placeholder="Start Date" required />
        <input name="end_date" onChange={(e) => this.setState({ end_date: e.target.value })} value={this.state.end_date} placeholder="End Date" required />
        <button type="submit">Update Course</button>
      </form>
    );
  }
}

export default UpdateCourse;
