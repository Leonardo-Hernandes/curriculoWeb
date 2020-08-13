import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  async componentDidMount() {
    let response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    this.setState({persons: response.data})
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}