import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/authOps';
import { Link } from 'react-router-dom';

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
    <>
      <Formik
        initialValues={initValues}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        <Form>
          <label htmlFor={emailId}>
            Email
            <Field
              name="email"
              id={emailId}
              type="email"
              placeholder="Type your email"
            />
            <ErrorMessage name="email" component="span" />
          </label>
          <label htmlFor={passwordId}>
            Password
            <Field
              name="password"
              id={passwordId}
              type="password"
              placeholder="Type your password"
            />
            <ErrorMessage name="password" component="span" />
          </label>
          <button type="submit">Login</button>
        </Form>
      </Formik>
      <p>
        Don`t have an account yet?
        <Link to="/signup"> Sign up now!</Link>
      </p>
    </>
  );
};

export default LoginForm;
