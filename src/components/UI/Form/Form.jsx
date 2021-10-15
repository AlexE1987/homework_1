import React, { Component } from 'react';
import './Form.css';
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
        <label className="label" htmlFor="">
          Имя
          <input
            className="input"
            name="name"
            type="text"
            value={this.props.state.name}
            onChange={this.props.getValuesFromForm}
          />
          {<p className="error">{this.props.state.nameError}</p>}
        </label>

        <label className="label" htmlFor="">
          Фамилия
          <input
            className="input"
            name="lastName"
            type="text"
            value={this.props.state.lastName}
            onChange={this.props.getValuesFromForm}
          />
          {<p className="error">{this.props.state.lastNameError}</p>}
        </label>

        <label className="label" htmlFor="">
          Дата рождения
          <input
            className="input"
            name="dateOfBirth"
            type="date"
            value={this.props.state.dateOfBirth}
            onChange={this.props.getValuesFromForm}
          />
          {<p className="error">{this.props.state.dateOfBirthError}</p>}
        </label>

        <label className="label" htmlFor="">
          Номер телефона
          <input
            className="input"
            type="tel"
            name="phone"
            placeholder="7-7777-77-77"
            value={this.props.state.phone}
            onChange={this.props.getValuesFromForm}
          />
          {<p className="error">{this.props.state.phoneError}</p>}
        </label>

        <label className="label" htmlFor="">
          Сайт
          <input
            className="input"
            name="site"
            type="text"
            placeholder="https:// "
            value={this.props.state.site}
            onChange={this.props.getValuesFromForm}
          />
          {<p className="error">{this.props.state.siteError}</p>}
        </label>

        <label className="label" htmlFor="">
          О себе
          <textarea
            className="input textarea"
            name="about"
            cols="30"
            rows="2"
            value={this.props.state.about}
            onChange={this.props.getValuesFromForm}></textarea>
          <div className="symbols-counter">
            Доступно символов: {600 - this.props.state.about.length}
          </div>
          {<p className="error">{this.props.state.aboutError}</p>}
        </label>

        <label className="label" htmlFor="">
          Стэк технологий
          <textarea
            className="input textarea"
            name="stackTechnology"
            cols="30"
            rows="2"
            value={this.props.state.stackTechnology}
            onChange={this.props.getValuesFromForm}></textarea>
          <div className="symbols-counter">
            Доступно символов: {600 - this.props.state.stackTechnology.length}
          </div>
          {<p className="error">{this.props.state.stackTechnologyError}</p>}
        </label>

        <label className="label" htmlFor="">
          Описание последнего проекта
          <textarea
            className="input textarea"
            name="lastProject"
            id=""
            cols="30"
            rows="2"
            value={this.props.state.lastProject}
            onChange={this.props.getValuesFromForm}></textarea>
          <div className="symbols-counter">
            Доступно символов: {600 - this.props.state.lastProject.length}
          </div>
          {<p className="error">{this.props.state.lastProjectError}</p>}
        </label>

        <div className="btn__container">
          <button className="btn">Сохранить</button>
          <button className="btn" onClick={this.props.clearState}>
            Отмена
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
