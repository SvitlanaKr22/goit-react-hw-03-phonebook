import PropTypes from 'prop-types';
import { ContactItem, Button } from './Contact.styled';

export default function Contact({ name, number, onClickDelete }) {
  return (
    <ContactItem>
      <p>{name + ': '}</p>
      <p>{number}</p>
      <Button type="button" onClick={onClickDelete}>
        Delete
      </Button>
    </ContactItem>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
