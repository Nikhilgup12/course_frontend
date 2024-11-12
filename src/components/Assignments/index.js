import React, { Component } from 'react';

class Assignments extends Component {
  state = {
    assignments: [],
  };


  fetchAssignments = (courseId) => {
    fetch(`https://course-backend-1-ezqa.onrender.com/${courseId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => this.setState({ assignments: data }))
      .catch((error) => console.error('Error fetching assignments:', error));
  };

  handleAddAssignment = () => {
    const { courseId } = this.props.match.params;
    this.props.history.push(`/add-assignment/${courseId}`);
  };

  componentDidMount() {
    const { courseId } = this.props.match.params;
    this.fetchAssignments(courseId);
  }

  render() {
    return (
      <div>
        <h1>Assignments</h1>
        <button onClick={this.handleAddAssignment}>Add Assignment</button>
        <ul>
          {this.state.assignments.map((assignment) => (
            <li key={assignment.id}>
              {assignment.title} - {assignment.due_date}
              <button onClick={() => this.props.history.push(`/update-assignment/${assignment.id}`)}>
                Edit
              </button>
              <button
                onClick={() =>
                  fetch(`https://course-backend-1-ezqa.onrender.com/${assignment.id}`, {
                    method: 'DELETE',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  })
                    .then(() => alert('Assignment Deleted'))
                    .then(() => window.location.reload())
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Assignments;
