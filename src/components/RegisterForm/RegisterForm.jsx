import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/authOps';

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
      .min(5, 'Too short')
      .max(50, 'Too long')
      .required('Required'),
    password: Yup.string()
      .min(4, 'Too short')
      .max(30, 'Too long')
      .required('Required'),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
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
        <Form>
          <label htmlFor={usernameId}>
            Username
            <Field
              name="name"
              id={usernameId}
              type="text"
              placeholder="Type your name"
            />
            <ErrorMessage name="name" component="span" />
          </label>
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
    </>
  );
};

export default RegisterForm;
