import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Layout, Header, HeaderContacts } from './Layout';

const INITIALE_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  ],
  filter: '',
};
const LS_CONTACT = 'contacts';

export class App extends Component {
  state = { ...INITIALE_STATE };

  componentDidMount() {
    const stateFromStorage = JSON.parse(localStorage.getItem(LS_CONTACT));
    if (stateFromStorage === null) return;
    this.setState({ contacts: stateFromStorage });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length)
      localStorage.setItem(LS_CONTACT, JSON.stringify(this.state.contacts));
  }

  addContact = newContact => {
    const { contacts } = this.state;
    if (contacts.find(({ name }) => name === newContact.name)) {
      alert(`${newContact.name} is already is contact`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  serchContact = () => {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const foundContact = this.serchContact();
    return (
      <Layout>
        <Header>Phonebook</Header>
        <ContactForm onSave={this.addContact} />

        <HeaderContacts>Contacts</HeaderContacts>
        <Filter value={this.state.filter} changeFilter={this.changeFilter} />
        <ContactList
          list={foundContact}
          handleDelete={this.handleDeleteContact}
        />
      </Layout>
    );
  }
}
