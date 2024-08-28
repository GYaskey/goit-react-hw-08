import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './ContactForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContactThunk } from '../../redux/contacts/operations';

const ContactForm = () => {
  const usernameID = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too short')
      .max(50, 'Too long')
      .required('Required'),
    number: Yup.string()
      .min(7, 'Too short')
      .max(15, 'Invalid number')
      .required('Required'),
  });

  const handleSubmit = (values, options) => {
    const newContact = { ...values };
    dispatch(addContactThunk(newContact));
    options.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={s.form}>
        <label htmlFor="usernameID" className={s.formLabel}>
          Name
          <Field name="name" id={usernameID} className={s.input} type="text" />
          <ErrorMessage name="name" component="span" className={s.error} />
        </label>
        <label htmlFor="numberId" className={s.formLabel}>
          Number
          <Field name="number" id={numberId} className={s.input} type="text" />
          <ErrorMessage name="number" component="span" className={s.error} />
        </label>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
