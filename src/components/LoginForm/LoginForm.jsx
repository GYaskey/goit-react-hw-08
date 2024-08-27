import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

const LoginForm = () => {
  const passwordId = useId();
  const emailId = useId();

  const initValues = {
    email: '',
    password: '',
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .min(2, 'Too short')
      .max(50, 'Too long')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Too short')
      .max(30, 'Too long')
      .required('Required'),
  });

  const handleSubmit = values => {
    console.log(values);
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
    </>
  );
};

export default LoginForm;
