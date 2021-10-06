const FormData = {
  name: {
    type: "text",
    name: "name",
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.",
  },
  number: {
    type: "tel",
    name: "number",
    pattern:
      "\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",
    title:
      "Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +",
  },
};

export default FormData;
