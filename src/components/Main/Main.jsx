import React, { Component } from 'react';
import FormCompleted from '../FormCompleted/FormCompleted';
import Form from '../UI/Form/Form';
import './Main.css';
import { formInitialState } from '../store/store';

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
    const errors = {
      name: '',
      lastName: '',
      dateOfBirth: '',
      phone: '',
      site: '',
      about: '',
      stackTechnology: '',
      lastProject: '',
    };

    if (!/^[A-ZА-Я]/.test(this.state.name.trim())) {
      errors.name = 'Имя должно начинаться с заглавной буквы';
    } else errors.name = '';

    if (!/^[A-ZА-Я]/.test(this.state.lastName.trim())) {
      errors.lastName = 'Фамилия должна начинаться с заглавной буквы';
    } else errors.lastName = '';

    if (this.state.dateOfBirth === '') {
      errors.dateOfBirth = 'Выберите дату рождения';
    } else errors.dateOfBirth = '';

    // ! create formating a phone number while typing

    if (!/[0-9]/.test(this.state.phone.trim())) {
      errors.phone = 'Введите корретный номер телефона в формате: 7-7777-77-77';
    } else errors.phone = '';

    if (this.state.site.trim().substring(0, 8) !== 'https://') {
      errors.site = 'Имя сайта должно начинаться с: "https://"';
    } else errors.site = '';

    if (this.state.about.trim().length > 600) {
      errors.about = 'Превышен лимит символов в поле';
    } else errors.about = '';

    if (this.state.stackTechnology.trim().length > 600) {
      errors.stackTechnology = 'Превышен лимит символов в поле';
    } else errors.stackTechnology = '';

    if (this.state.lastProject.trim().length > 600) {
      errors.lastProject = 'Превышен лимит символов в поле';
    } else errors.stackTechnology = '';

    if (
      errors.name ||
      errors.lastName ||
      errors.dateOfBirth ||
      errors.phone ||
      errors.site ||
      errors.about ||
      errors.stackTechnology ||
      errors.lastProject
    ) {
      this.setState(() => ({
        nameError: errors.name,
        lastNameError: errors.lastName,
        dateOfBirthError: errors.dateOfBirth,
        phoneError: errors.phone,
        siteError: errors.site,
        aboutError: errors.about,
        stackTechnologyError: errors.stackTechnology,
        lastProjectError: errors.lastProject,
      }));
    } else {
      this.setState({ formIsValid: true });
    }

    // return true;
  };

  clearState = (initState) => {
    this.setState(initState);
  };

  render() {
    return (
      <div>
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
