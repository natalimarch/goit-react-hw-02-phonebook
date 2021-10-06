import React from "react";
import { generate } from "shortid";
import { Component } from "react";
import styles from "./Form.module.css";
import FormData from "../Phonebook/formData";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = generate();
  numberInputId = generate();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <form className={styles.Form} onSubmit={handleSubmit}>
        <div className={styles.FormContainer}>
          <div className={styles.Name}>
            <label className={styles.Label} htmlFor={this.nameInputId}>
              Name
              <input
                {...FormData.name}
                className={styles.Input}
                required
                value={name}
                onChange={handleChange}
                id={this.nameInputId}
              />
            </label>
          </div>
          <div className={styles.Tel}>
            <label className={styles.Label} htmlFor={this.numberInputId}>
              Number
              <input
                {...FormData.number}
                className={styles.Input}
                required
                value={number}
                onChange={handleChange}
                id={this.numberInputId}
              />
            </label>
          </div>
          <button type="submit" className={styles.NameBtn}>
            Add contact
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
