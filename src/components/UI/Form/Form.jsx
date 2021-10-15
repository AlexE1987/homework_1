import React, { Component } from 'react';
import './Form.css';
import { formInitialState } from '../../store/store';
export class Form extends Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.inputsValidate();
  };

  render() {
    return (
      <form
        className={this.props.state.formIsValid ? 'hide' : 'form__wrapper'}
        onSubmit={this.handleFormSubmit}>
        <label htmlFor="">
          Name
          <input
            name="name"
            type="text"
            value={this.props.state.name}
            onChange={this.props.getValuesFromForm}
          />
          {<p>{this.props.state.nameError}</p>}
        </label>

        <label htmlFor="">
          Last Name
          <input
            name="lastName"
            type="text"
            value={this.props.state.lastName}
            onChange={this.props.getValuesFromForm}
          />
          {<p>{this.props.state.lastNameError}</p>}
        </label>

        <label htmlFor="">
          Date of birth
          <input
            name="dateOfBirth"
            type="date"
            value={this.props.state.dateOfBirth}
            onChange={this.props.getValuesFromForm}
          />
          {<p>{this.props.state.dateOfBirthError}</p>}
        </label>

        <label htmlFor="">
          Phone number
          <input
            type="tel"
            name="phone"
            maxLength="12"
            value={this.props.state.phone}
            onChange={this.props.getValuesFromForm}
          />
          {<p>{this.props.state.phoneError}</p>}
        </label>

        <label htmlFor="">
          Site
          <input
            name="site"
            type="text"
            value={this.props.state.site}
            onChange={this.props.getValuesFromForm}
          />
          {<p>{this.props.state.siteError}</p>}
        </label>

        <label htmlFor="">
          About
          <textarea
            name="about"
            cols="30"
            rows="2"
            value={this.props.state.about}
            onChange={this.props.getValuesFromForm}></textarea>
          <div>Symbols: 600max {this.props.state.about.length}</div>
          {<p>{this.props.state.aboutError}</p>}
        </label>

        <label htmlFor="">
          Stack technology
          <textarea
            name="stackTechnology"
            cols="30"
            rows="2"
            value={this.props.state.stackTechnology}
            onChange={this.props.getValuesFromForm}></textarea>
          <div>Symbols: 600max {this.props.state.stackTechnology.length}</div>
          {<p>{this.props.state.stackTechnologyError}</p>}
        </label>

        <label htmlFor="">
          Last Project
          <textarea
            name="lastProject"
            id=""
            cols="30"
            rows="2"
            value={this.props.state.lastProject}
            onChange={this.props.getValuesFromForm}></textarea>
          <div>Symbols: 600max {this.props.state.lastProject.length}</div>
          {<p>{this.props.state.lastProjectError}</p>}
        </label>

        <button>Save</button>
        <button onClick={this.props.clearState}>Cancel</button>
      </form>
    );
  }
}

export default Form;
