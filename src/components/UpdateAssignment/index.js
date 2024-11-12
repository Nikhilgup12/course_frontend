import React, { Component } from 'react';

class UpdateAssignment extends Component {
  state = { title: '', due_date: '', description: '' };

  fetchAssignmentData = (id) => {
    fetch(`http://localhost:3000/assignments/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => this.setState({ ...data }))
      .catch((error) => console.error('Error fetching assignment:', error));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { id } = this.props.match.params;
    fetch(`http://localhost:3000/assignments/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(() => alert('Assignment updated successfully'))
      .then(() => this.props.history.push(`/assignments/${this.props.match.params.courseId}`));
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchAssignmentData(id);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" onChange={(e) => this.setState({ title: e.target.value })} value={this.state.title} placeholder="Assignment Title" required />
        <input name="due_date" onChange={(e) => this.setState({ due_date: e.target.value })} value={this.state.due_date} placeholder="Due Date" required />
        <textarea name="description" onChange={(e) => this.setState({ description: e.target.value })} value={this.state.description} placeholder="Assignment Description" required />
        <button type="submit">Update Assignment</button>
      </form>
    );
  }
}

export default UpdateAssignment;
