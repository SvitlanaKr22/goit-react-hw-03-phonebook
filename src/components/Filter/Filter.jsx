import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Field, Label } from './Filter.styled';

const Filter = ({ value, changeFilter }) => (
  <Formik initialValues={{ name: '' }}>
    <Label>
      Find contact by name
      <Field type="text" name="name" value={value} onChange={changeFilter} />
    </Label>
  </Formik>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
