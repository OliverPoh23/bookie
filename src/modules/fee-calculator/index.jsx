import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useFormik } from 'formik';
// UI
import Box from 'components/box';
import Typography from 'components/typography';
import Input from 'components/input';
import Form from 'components/form';
import FormGroup from 'components/form-group';
import Button from 'components/button';
import { useHistory, useRouteMatch } from 'react-router-dom';
// Styles
import './styles.sass';
// Assets
import { ReactComponent as LitecoinIcon } from 'assets/images/coins/litecoin.svg';
import { ReactComponent as BitcoinIcon } from 'assets/images/coins/bitcoin.svg';

const validationSchema = Yup.object().shape({
  amount: Yup.number().required('Amount is required'),
});

const FeeCalculator = ({ className, type }) => {
  const classes = classNames({
    'fee-calculator': true,
    [className]: className
  });

  const history = useHistory();
  const match = useRouteMatch();

  const formik = useFormik({
    initialValues: {
      amount: '',
    },
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      history.push(`${match.url}/details`);
      setSubmitting(false);
      resetForm();
    },
  });

  const title = type === 'deposit' ? 'Deposit' : 'Withdraw';

  const { handleSubmit, handleChange, errors, values } = formik;

  return (
    <Form className={classes} onSubmit={handleSubmit}>
      <Typography className="fee-calculator__title" component="h4">Transaction Fee Calculator</Typography>
      <Box className="fee-calculator__box">
        <div className="fee-calculator__items">
          <FormGroup label={`${title} Amount`} className="fee-calculator__item" errorMsg={errors.amount}>
            <Input
              placeholder="$50.00"
              type="number"
              name="amount"
              invalid={errors.amount}
              value={values.amount}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup label="Estimated Fees" className="fee-calculator__item">
            <div className="fee-calculator__coins">
              <div className="fee-calculator__coin">
                <LitecoinIcon className="fee-calculator__coin-icon" />
                <span className="fee-calculator__coin-price">$1.75</span>
              </div>
              <div className="fee-calculator__coin">
                <BitcoinIcon className="fee-calculator__coin-icon" />
                <span className="fee-calculator__coin-price">$0.09</span>
              </div>
            </div>
          </FormGroup>
        </div>
      </Box>
      <Button variant="primary" size="xl" type="submit">Process</Button>
    </Form>
  );
};

FeeCalculator.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

export default FeeCalculator;
