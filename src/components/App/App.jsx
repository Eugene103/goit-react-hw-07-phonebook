import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactsList } from "components/ContactsList/ContactsList";
import { Container, Section } from "./GlobalStyle";
import { FindCont } from "components/FindCont/FindCont";
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";


export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter)
  
 const filterContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1,
  );
  ;
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  return <Section>
      <h1>PhoneBook</h1>
      <ContactForm  />
      <Container>
        <h2>Contacts</h2>
        <FindCont />
      <ContactsList arr={filterContacts}/>
      </Container>
    </Section>
}


