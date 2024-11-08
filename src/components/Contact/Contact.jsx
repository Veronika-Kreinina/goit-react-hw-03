import s from "./Contact.module.css";

function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <>
      <div className={s.container}>
        <p className={s.text}>{name}</p>
        <p className={s.text}>{number}</p>
        <button className={s.btn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </>
  );
}

export default Contact;
