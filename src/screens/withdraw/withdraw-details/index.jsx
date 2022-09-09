import React from 'react';
// UI
import ContentBox from 'components/content-box';
import Typography from 'components/typography';
import Input from 'components/input';
import Button from 'components/button';
import FormGroup from 'components/form-group';
// Styles
import './styles.sass';
// Assets
import { ReactComponent as LitecoinIcon } from 'assets/images/coins/litecoin.svg';

const WithdrawDetails = () => {
  return (
    <ContentBox className="withdraw-details">
      <ContentBox.Header>
        <Typography component="h3">Withdraw</Typography>
      </ContentBox.Header>
      <ContentBox.Body>
        <div className="withdraw-details__content">
          <LitecoinIcon className="withdraw-details__icon" />
          <Typography component="p" className="text-medium withdraw-details__title">
            Available to withdraw: <Typography component="span" className="text-bold">$100.00</Typography>
          </Typography>
          <div className="withdraw-details__box">
            <FormGroup label="Withdraw Amount:">
              <Input
                type="text"
                value="$75.00"
                disabled
              />
              <Typography component="p" variant="p-sm" className="withdraw-details__info">
                Transaction Fee: <Typography component="span" className="text-bold">$0.15</Typography>
              </Typography>
            </FormGroup>
            <FormGroup label="LTC Destination Address:" last>
              <Input
                type="text"
                value="3DmdyMxDew8BJPpDGW3hFUzv3jh75sN1jW"
                disabled
              />
            </FormGroup>
          </div>
          <Button variant="primary" size="xl" type="submit">Withdraw Funds</Button>
        </div>
      </ContentBox.Body>
    </ContentBox>
  );
};

export default WithdrawDetails;
