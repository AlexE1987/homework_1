import React, { Component } from 'react';
import './Form.css';
import { formInitialState } from '../../store/store';
export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Name' };
  }

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
          <input name="name" type="text" onChange={this.props.getValuesFromForm} />
          {<p>{this.props.state.nameError}</p>}
        </label>

        <label htmlFor="">
          <input name="lastName" type="text" onChange={this.props.getValuesFromForm} />
          {<p>{this.props.state.lastNameError}</p>}
        </label>

        <label htmlFor="">
          <input name="dateOfBirth" type="date" onChange={this.props.getValuesFromForm} />
          {<p>{this.props.state.dateOfBirthError}</p>}
        </label>

        <label htmlFor="">
          <input type="tel" name="phone" maxLength="12" onChange={this.props.getValuesFromForm} />
          {<p>{this.props.state.phoneError}</p>}
        </label>

        <label htmlFor="">
          <input name="site" type="text" onChange={this.props.getValuesFromForm} />
          {<p>{this.props.state.siteError}</p>}
        </label>

        <label htmlFor="">
          <textarea
            name="about"
            cols="30"
            rows="2"
            onChange={this.props.getValuesFromForm}></textarea>
          <div>Cчетчик символов(600max){this.props.state.about.length}</div>
        </label>

        <label htmlFor="">
          <textarea
            name="stackTechnology"
            cols="30"
            rows="2"
            onChange={this.props.getValuesFromForm}></textarea>
          <div>Cчетчик символов(600max){this.props.state.stackTechnology.length}</div>
        </label>

        <label htmlFor="">
          <textarea
            name="lastProject"
            id=""
            cols="30"
            rows="2"
            onChange={this.props.getValuesFromForm}></textarea>
          <div>Cчетчик символов(600max){this.props.state.lastProject.length}</div>
        </label>

        <button>Save</button>
        <button>Cancel</button>
      </form>
    );
  }
}

export default Form;
