import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
// UI
import ScreenLayout from 'components/screen-layout';
import ContentBox from 'components/content-box';
import Typography from 'components/typography';
import Input from 'components/input';
import Button from 'components/button';
import FormGroup from 'components/form-group';
// Styles
import './styles.sass';

const validationSchema = Yup.object().shape({
  userName: Yup.string().required('Username is a required field'),
  amount: Yup.number().required('Amount is a required field'),
});

const ProfileTransferScreen = () => {
  const formik = useFormik({
    initialValues: {
      userName: 'Fortbettor',
      amount: ''
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
      <ContentBox className="player-transfer-screen">
        <ContentBox.Header>
          <Typography component="h3">Player transfer</Typography>
        </ContentBox.Header>
        <ContentBox.Body>
          <form className="player-transfer-screen__body" onSubmit={handleSubmit}>
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
            <FormGroup label="Amount" errorMsg={touched.amount && errors.amount}>
              <Input
                type="number"
                value={values.amount}
                name="amount"
                invalid={touched.amount && errors.amount}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="$"
              />
              <div className="player-transfer-screen__info">
                <Typography component="p" className="text-bold text-accent-2">$180.00 Available to Transfer</Typography>
                <Typography component="p">Your balance remaining after player transfer must be $10 or grater</Typography>
              </div>
            </FormGroup>
            <Button variant="primary" size="xl" type="submit">Send transfer</Button>
          </form>
        </ContentBox.Body>
      </ContentBox>
    </ScreenLayout>
  );
};

export default ProfileTransferScreen;
