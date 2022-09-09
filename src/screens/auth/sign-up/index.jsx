import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
// Redux
import { selectUser } from 'redux/auth/selectors';
// UI
import ScreenLayout from 'components/screen-layout';
import SignContainer from 'modules/sign-container';
import Typography from 'components/typography';
import Form from 'components/form';
import FormGroup from 'components/form-group';
import Input from 'components/input';
import Checkbox from 'components/checkbox';
import Button from 'components/button';
// Styles
import './styles.sass';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Email field is required'),
  user: Yup.string().required('Username field is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().required('Password confirm is required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
  certify: Yup.boolean().oneOf([true], 'Field must be checked'),
  read: Yup.boolean().oneOf([true], 'Field must be checked')
});

const SignUp = ({ user: { userData } }) => {
  const history = useHistory();

  React.useEffect(() => {
    if (userData) {
      history.push('/events');
    }
  }, [userData, history]);

  const formik = useFormik({
    initialValues: {
      email: '',
      user: '',
      password: '',
      confirmPassword: '',
      certify: false,
      read: false,
    },
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        resetForm();
      }, 500);
    },
  });

  if (userData) {
    return <div />;
  }

  const { handleSubmit, touched, errors, handleChange, handleBlur, values, isSubmitting } = formik;

  return (
    <ScreenLayout>
      <SignContainer>
        <Form onSubmit={handleSubmit}>
          <Typography className="sign-up__title" component="h2">Create an account</Typography>
          <FormGroup errorMsg={touched.email && errors.email}>
            <Input
              type="email"
              value={values.email}
              name="email"
              invalid={touched.email && errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup errorMsg={touched.user && errors.user}>
            <Input
              type="text"
              value={values.user}
              name="user"
              invalid={touched.user && errors.user}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Username"
            />
          </FormGroup>
          <FormGroup errorMsg={touched.password && errors.password}>
            <Input
              type="password"
              value={values.password}
              name="password"
              invalid={touched.password && errors.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password"
            />
          </FormGroup>
          <FormGroup errorMsg={touched.confirmPassword && errors.confirmPassword}>
            <Input
              type="password"
              value={values.confirmPassword}
              name="confirmPassword"
              invalid={touched.confirmPassword && errors.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Confirm password"
            />
          </FormGroup>
          <FormGroup errorMsg={touched.certify && errors.certify}>
            <Checkbox
              label="I certify that I am of legal gambling age in my juristiction"
              checked={values.certify}
              name="certify"
              onChange={handleChange}
              error={touched.certify && errors.certify}
            />
          </FormGroup>
          <FormGroup errorMsg={touched.read && errors.read}>
            <Checkbox
              label={
                <span>I have read and agreed to the <a href="http://example.com" className="sign-up__link">Terms and Conditions</a> of this website</span>
              }
              checked={values.read}
              name="read"
              onChange={handleChange}
              error={touched.read && errors.read}
            />
          </FormGroup>
          <Button type="submit" variant="primary" size="xl" loading={isSubmitting}>Register</Button>
        </Form>
      </SignContainer>
    </ScreenLayout>
  );
};

SignUp.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

export default connect(mapStateToProps)(SignUp);
