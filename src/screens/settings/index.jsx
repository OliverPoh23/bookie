import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
// UI
import ScreenLayout from 'components/screen-layout';
import ContentBox from 'components/content-box';
import Typography from 'components/typography';
import AvatarEditor from 'modules/avatar-editor';
import Input from 'components/input';
import Select from 'components/select';
import Button from 'components/button';
import FormGroup from 'components/form-group';
// Styles
import './styles.sass';
// Assets
import AvatarImage from 'assets/images/user/user-fullsize.jpg';

const validationSchema = Yup.object().shape({
  userName: Yup.string().required('Username is a required field'),
  email: Yup.string().email().required('Email field is required'),
  password: Yup.string().required('Username is a required field'),
  timeZone: Yup.string().required('Time Zone is a required field'),
});

const SettingsScreen = () => {
  const formik = useFormik({
    initialValues: {
      userName: 'Fortbettor',
      email: 'fortbettor@gmail.com',
      password: '******123',
      timeZone: 'America/Phoenix'
    },
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      setSubmitting(false);
      resetForm();
    },
  });

  const { handleSubmit, touched, errors, handleChange, handleBlur, values } = formik;

  return (
    <ScreenLayout>
      <ContentBox className="settings-screen">
        <ContentBox.Header>
          <Typography component="h3">Settings</Typography>
        </ContentBox.Header>
        <ContentBox.Body>
          <form className="settings-screen__body" onSubmit={handleSubmit}>
            <FormGroup label="Profile picture">
              <AvatarEditor image={AvatarImage} />
            </FormGroup>
            <FormGroup label="Username" errorMsg={touched.userName && errors.userName}>
              <Input
                type="text"
                value={values.userName}
                name="userName"
                invalid={touched.email && errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Username"
              />
            </FormGroup>
            <FormGroup label="Email" errorMsg={touched.email && errors.email}>
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
            <FormGroup label="Password" errorMsg={touched.password && errors.password}>
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
            <FormGroup label="Time Zone" errorMsg={touched.timeZone && errors.timeZone}>
              <Select
                value={values.timeZone}
                onChange={({ value }) => handleChange('timeZone')(value)}
                name="timeZone"
                timezones
              />
            </FormGroup>
            <Button variant="primary" size="xl" type="submit">Save</Button>
          </form>
        </ContentBox.Body>
      </ContentBox>
    </ScreenLayout>
  );
};

export default SettingsScreen;
