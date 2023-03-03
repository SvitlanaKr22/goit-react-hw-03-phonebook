import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';

export default function ContactList({ list, handleDelete }) {
  return (
    <List>
      {list.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onClickDelete={() => handleDelete(id)}
        ></Contact>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
