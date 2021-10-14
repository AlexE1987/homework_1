import React, { Component } from 'react';

export class FormCompleted extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className={this.props.state.formIsValid ? '' : 'hide'}>
        <p>Name {this.props.state.name}</p>
        <p>Last Name{this.props.state.lastName}</p>
        <p>Date of birth {this.props.state.dateOfBirth}</p>
        <p>Phone {this.props.state.phone}</p>
        <p>Site {this.props.state.site}</p>
        <p>About {this.props.state.about}</p>
        <p>Stack tech {this.props.state.stackTechnology}</p>
        <p>Last project{this.props.state.lastProject}</p>
      </div>
    );
  }
}

export default FormCompleted;
