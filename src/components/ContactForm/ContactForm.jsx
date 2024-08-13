import { ErrorMessage, Field, Form, Formik } from 'formik';
import s from './ContactForm.module.css';
import { useId } from 'react';

const ContactForm = () => {
  const usernameID = useId();
  const numberId = useId();

  const initialValues = {
    username: '',
    number: '',
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <label htmlFor="usernameID" className={s.formLabel}>
          Name
          <Field name="username" id={usernameID} className={s.input}></Field>
          <ErrorMessage name="username" component="span" className={s.error} />
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
