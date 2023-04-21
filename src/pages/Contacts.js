import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const Contacts = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Your contacts</h2>
      {isLoading && !error && <PropagateLoader />}
      <Filter />
      <ContactList />

      <h2>Create new contacts</h2>
      <ContactForm />
    </div>
  );
};

export default Contacts;
