import React, { Component } from 'react';

class AddAssignment extends Component {
  state = { title: '', due_date: '',courseId: this.props.match.params.courseId };

  handleSubmit = (event) => {
    event.preventDefault();
    const { courseId, title, due_date} = this.state;
    fetch('http://localhost:3000/assignments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ course_id: courseId,
        title: title,
        due_date: due_date,
        })
    })
      .then(() => alert('Assignment added successfully'))
      .then(() => this.props.history.push(`/assignments/${courseId}`));
  };

  handleChange = (event) => this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" onChange={this.handleChange} placeholder="Assignment Title" required />
        <input name="due_date" onChange={this.handleChange} placeholder="Due Date" required />
        {/* <textarea name="description" onChange={this.handleChange} placeholder="Assignment Description" required /> */}
        <button type="submit">Add Assignment</button>
      </form>
    );
  }
}

export default AddAssignment;
