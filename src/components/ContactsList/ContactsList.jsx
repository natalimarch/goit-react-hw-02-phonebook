import React from "react";
import styles from "./ContactsList.module.css";

const ContactsList = ({ list, onDelete }) => {
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
      <ul className={styles.List}>{AddNewContacts}</ul>
    </>
  );
};

export default ContactsList;
