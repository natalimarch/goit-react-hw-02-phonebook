import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ onChange, value }) => {
  return (
    <>
      <input
        className={styles.Input}
        onChange={onChange}
        value={value}
        type="text"
        name="filter"
      />
    </>
  );
};

export default Filter;
