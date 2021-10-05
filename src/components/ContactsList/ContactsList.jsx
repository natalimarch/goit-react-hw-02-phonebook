import React from "react";
import styles from "./ContactsList.module.css";

const ContactsList = ({ list, onChange, value, onDelete }) => {
  const AddNewContacts = list.map((item) => {
    const { name, number } = item;
    return (
      <li key={item.id} className={styles.Item}>
        <p className={styles.Text}>
          {name} {number}
        </p>
        <button
          className={styles.Btn}
          type="button"
          onClick={() => onDelete(item.id)}
        >
          Delete
        </button>
      </li>
    );
  });
  return (
    <>
      <input
        className={styles.Input}
        onChange={onChange}
        value={value}
        type="text"
        name="filter"
      />
      <ul className={styles.List}>{AddNewContacts}</ul>
    </>
  );
};

export default ContactsList;
