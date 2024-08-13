import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './ContactForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';

const ContactForm = ({ handleAddContact }) => {
  const usernameID = useId();
  const numberId = useId();

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
    handleAddContact(values);
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
          <Field name="name" id={usernameID} className={s.input}></Field>
          <ErrorMessage name="name" component="span" className={s.error} />
        </label>
        <label htmlFor="numberId" className={s.formLabel}>
          Number
          <Field name="number" id={numberId} className={s.input}></Field>
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
