import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/authOps';
import { Link } from 'react-router-dom';
import s from './LoginForm.module.css';

const LoginForm = () => {
  const passwordId = useId();
  const emailId = useId();
  const dispatch = useDispatch();

  const initValues = {
    email: '',
    password: '',
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Must be a valid email')
      .min(2, 'Too short')
      .max(50, 'Too long')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Too short')
      .max(30, 'Too long')
      .required('Required'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initValues}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        <Form className={s.form}>
          <label htmlFor={emailId} className={s.label}>
            Email
            <Field
              name="email"
              id={emailId}
              type="email"
              placeholder="Type your email"
              className={s.input}
            />
            <ErrorMessage name="email" component="span" className={s.error} />
          </label>
          <label htmlFor={passwordId} className={s.label}>
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
            />
          </label>
          <button type="submit" className={s.btn}>
            Login
          </button>
        </Form>
      </Formik>
      <p className={s.text}>
        Don`t have an account yet?
        <Link to="/signup" className={s.cta}>
          {' '}
          Sign up now!
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
