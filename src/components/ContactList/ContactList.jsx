import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import c from "./ContactList.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const items = useSelector(selectContacts);

  const { name } = useSelector(selectNameFilter);

  const filteredContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(name)
  );

  return (
    <ul className={c.list}>
      {filteredContacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} id={contact.id} />;
      })}
    </ul>
  );
};

export default ContactList;
