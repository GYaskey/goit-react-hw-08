import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/authOps';
import { Link } from 'react-router-dom';
import s from './RegisterForm.module.css';

const RegisterForm = () => {
  const usernameId = useId();
  const passwordId = useId();
  const emailId = useId();
  const dispatch = useDispatch();

  const initValues = {
    name: '',
    email: '',
    password: '',
  };

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too short')
      .max(50, 'Too long')
      .required('Required'),
    email: Yup.string()
      .email('Must be a valid email')
      .min(5, 'Too short')
      .max(50, 'Too long')
      .required('Required'),
    password: Yup.string()
      .min(4, 'Too short')
      .max(30, 'Too long')
      .required('Required'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initValues}
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
      >
        <Form className={s.form}>
          {' '}
          <label htmlFor={usernameId} className={s.label}>
            {' '}
            Username
            <Field
              name="name"
              id={usernameId}
              type="text"
              placeholder="Type your name"
              className={s.input}
            />
            <ErrorMessage name="name" component="span" className={s.error} />{' '}
          </label>
          <label htmlFor={emailId} className={s.label}>
            {' '}
            Email
            <Field
              name="email"
              id={emailId}
              type="email"
              placeholder="Type your email"
              className={s.input}
            />
            <ErrorMessage name="email" component="span" className={s.error} />{' '}
          </label>
          <label htmlFor={passwordId} className={s.label}>
            {' '}
            Password
            <Field
              name="password"
              id={passwordId}
              type="password"
              placeholder="Type your password"
              className={s.input}
            />
            <ErrorMessage
              name="password"
              component="span"
              className={s.error}
            />{' '}
          </label>
          <button type="submit" className={s.btn}>
            {' '}
            Register
          </button>
        </Form>
      </Formik>
      <p className={s.text}>
        {' '}
        Already have an account?
        <Link to="/login" className={s.cta}>
          {' '}
          Login now!
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
