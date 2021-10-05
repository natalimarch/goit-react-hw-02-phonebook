import { Component } from "react";
import styles from "./Phonebook.module.css";
import { generate } from "shortid";
import ContactsList from "../ContactsList/ContactsList";
import Form from "./Form";

class Phonebook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  nameInputId = generate();
  numberInputId = generate();

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.state;
    contacts.find((contact) => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : contacts.find((contact) => contact.number === number)
      ? alert(`${number} is already in contacts`)
      : this.setState((prevState) => {
          const newContact = [...prevState.contacts];
          newContact.push({ name: name, number: number, id: generate() });
          return { contacts: newContact };
        });
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  filterInput = (e) => {
    const { contacts, filter } = this.state;
    const FilterLowerCase = filter.toLowerCase();
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(FilterLowerCase)
    );
  };

  onDelete = (idx) => {
    this.setState(({ contacts }) => {
      const deleteContact = contacts.filter((contact) => contact.id !== idx);
      return { contacts: deleteContact };
    });
  };

  render() {
    const { name, number, filter } = this.state;
    const { handleChange, handleSubmit, filterInput, onDelete } = this;
    const Contacts = filterInput();
    return (
      <div className={styles.container}>
        <h2 className={styles.Title}>Phonebook</h2>
        <form className={styles.Form} onSubmit={handleSubmit}>
          <div className={styles.FormContainer}>
            <div className={styles.Name}>
              <label className={styles.Label} htmlFor={this.nameInputId}>
                Name
                <input
                  {...Form.name}
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
                  {...Form.number}
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
        <h2 className={styles.Title}>Contacts</h2>
        <ContactsList
          list={Contacts}
          onChange={handleChange}
          value={filter}
          onDelete={onDelete}
        />
      </div>
    );
  }
}

export default Phonebook;
