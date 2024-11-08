import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

function ContactList({ contacts, onDelete }) {
  return (
    <div>
      <ul className={s.list}>
        {contacts.map((contact) => (
          <li className={s.item} key={contact.id}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
