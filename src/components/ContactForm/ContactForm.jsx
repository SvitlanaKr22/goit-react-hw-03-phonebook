import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Form, Label, Field, ErrorMessage, Button } from './ContactForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Incorrect format. Enter in format XXX-XX-XX'
    )
    .required('Required'),
});

const ContactForm = ({ onSave }) => (
  <Formik
    initialValues={{
      name: '',
      number: '',
    }}
    validationSchema={ContactFormSchema}
    onSubmit={(values, actions) => {
      onSave({ id: nanoid(), ...values });
      actions.resetForm();
    }}
  >
    <Form>
      <Label>
        Name
        <Field
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <ErrorMessage name="name" component="div" />
      </Label>
      <Label>
        Number
        <Field
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ErrorMessage name="number" component="div" />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  </Formik>
);

export default ContactForm;

ContactForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
