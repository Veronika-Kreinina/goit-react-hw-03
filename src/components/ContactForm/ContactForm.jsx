import { useId } from "react";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { Field, Form, Formik } from "formik";

function ContactForm({ onAdd }) {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
      id: nanoid(),
    });
    e.target.reset();
  };

  return (
    <Formik initialValues={{}} onSubmit={handleSubmit}>
      <Form>
        <label className={s.label} htmlFor={nameId}>
          Name
        </label>
        <Field className={s.input} type="text" name="name" id={nameId} />
        <label className={s.label} htmlFor={numberId}>
          Number
        </label>
        <Field className={s.input} type="number" name="number" id={numberId} />
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
