import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Layout, Header, HeaderContacts } from './Layout';

const INITIALE_STATE = {
  contacts: [
    { id: 'id-1', name: 'RosieSimpson', number: '459-12-56' },
    { id: 'id-2', name: 'HermioneKline', number: '443-89-12' },
    { id: 'id-3', name: 'EdenClements', number: '645-17-79' },
    { id: 'id-4', name: 'AnnieCopeland', number: '227-91-26' },
  ],
  filter: '',
};

export class App extends Component {
  state = { ...INITIALE_STATE };

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
          //list={this.state.contacts}
          list={foundContact}
          handleDelete={this.handleDeleteContact}
        />
      </Layout>
    );
  }
}
