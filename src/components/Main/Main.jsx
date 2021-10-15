import React, { Component } from 'react';
import FormCompleted from '../FormCompleted/FormCompleted';
import Form from '../UI/Form/Form';
import './Main.css';
import { formInitialState, formErrors } from '../store/store';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = formInitialState;
  }

  getValuesFromForm = ({ target: { value, name } }) => {
    this.setState(() => ({
      [name]: value,
    }));
  };

  inputsValidate = () => {
    if (!/^[A-ZА-Я]/.test(this.state.name.trim())) {
      this.state.name === ''
        ? (formErrors.name = 'Поле пустое. Заполните пожалуйста')
        : (formErrors.name = 'Имя должно начинаться с заглавной буквы');
    } else formErrors.name = '';

    if (!/^[A-ZА-Я]/.test(this.state.lastName.trim())) {
      this.state.lastName === ''
        ? (formErrors.lastName = 'Поле пустое. Заполните пожалуйста')
        : (formErrors.lastName = 'Имя должно начинаться с заглавной буквы');
    } else formErrors.lastName = '';

    if (this.state.dateOfBirth === '') {
      formErrors.dateOfBirth = 'Поле пустое. Заполните пожалуйста';
    } else formErrors.dateOfBirth = '';

    // ! create formating a phone number while typing

    if (!/[0-9]/.test(this.state.phone.trim())) {
      this.state.phone === ''
        ? (formErrors.phone = 'Поле пустое. Заполните пожалуйста')
        : (formErrors.phone = 'Введите корректный номер телефона в формате: 7-7777-77-77');
    } else formErrors.phone = '';

    if (this.state.site.trim().substring(0, 8) !== 'https://') {
      this.state.site === ''
        ? (formErrors.site = 'Поле пустое. Заполните пожалуйста')
        : (formErrors.site = 'Имя сайта должно начинаться с: "https://"');
    } else formErrors.site = '';

    if (this.state.about.trim() === '') {
      this.state.about.trim().length > 600
        ? (formErrors.about = 'Превышен лимит символов в поле')
        : (formErrors.about = 'Поле пустое. Заполните пожалуйста');
    } else formErrors.about = '';

    if (this.state.stackTechnology.trim() === '') {
      this.state.stackTechnology.trim().length > 600
        ? (formErrors.stackTechnology = 'Превышен лимит символов в поле')
        : (formErrors.stackTechnology = 'Поле пустое. Заполните пожалуйста');
    } else formErrors.stackTechnology = '';

    if (this.state.lastProject.trim() === '') {
      this.state.lastProject.trim().length > 600
        ? (formErrors.lastProject = 'Превышен лимит символов в поле')
        : (formErrors.lastProject = 'Поле пустое. Заполните пожалуйста');
    } else formErrors.lastProject = '';

    if (
      formErrors.name ||
      formErrors.lastName ||
      formErrors.dateOfBirth ||
      formErrors.phone ||
      formErrors.site ||
      formErrors.about ||
      formErrors.stackTechnology ||
      formErrors.lastProject
    ) {
      this.setState(() => ({
        nameError: formErrors.name,
        lastNameError: formErrors.lastName,
        dateOfBirthError: formErrors.dateOfBirth,
        phoneError: formErrors.phone,
        siteError: formErrors.site,
        aboutError: formErrors.about,
        stackTechnologyError: formErrors.stackTechnology,
        lastProjectError: formErrors.lastProject,
      }));
    } else {
      this.setState({ formIsValid: true });
    }
  };

  clearState = (event) => {
    event.preventDefault();
    this.setState(formInitialState);
  };

  render() {
    return (
      <div>
        <button onClick={this.clearState}>Clear</button>
        <Form
          getValuesFromForm={this.getValuesFromForm}
          formValid={this.state.formValid}
          formValidate={this.formValidate}
          inputsValidate={this.inputsValidate}
          clearState={this.clearState}
          state={this.state}
        />
        <FormCompleted state={this.state} />
      </div>
    );
  }
}

export default Main;
