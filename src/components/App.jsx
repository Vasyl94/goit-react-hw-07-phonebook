import Form from './form/Form';
import { Header } from './header/Header';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'services/getContacts';
import { useEffect } from 'react';

export default function App() {

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Header title={'Phonebook'} />
      <Form />
      <Header title={'Contacts'} />
      <Filter />
      <ContactList />
    </>
  );
}
