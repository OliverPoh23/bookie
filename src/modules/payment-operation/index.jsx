import React from 'react';
import PropTypes from 'prop-types';
// UI
import ContentBox from 'components/content-box';
import Typography from 'components/typography';
import CoinPreview from 'components/coin-preview';
import FeeCalculator from 'modules/fee-calculator';
// Styles
import './styles.sass';
// Assets
import { ReactComponent as LitecoinIcon } from 'assets/images/coins/litecoin-full.svg';
import { ReactComponent as BitcoinIcon } from 'assets/images/coins/bitcoin-full.svg';

const PaymentOperation = ({ type }) => {

  const [selectedCoin, setSelectedCoin] = React.useState(null);

  return (
    <ContentBox className="payment-operation">
      <ContentBox.Header>
        <Typography component="h3" className="payment-operation__title">{type}</Typography>
      </ContentBox.Header>
      <ContentBox.Body>
        <div className="payment-operation__method">
          <div className="payment-operation__method-item">
            <CoinPreview icon={BitcoinIcon} isActive={selectedCoin === 'bitcoin'} onClick={() => { setSelectedCoin('bitcoin'); }} />
          </div>
          <div className="payment-operation__method-item">
            <CoinPreview icon={LitecoinIcon} isActive={selectedCoin === 'litecoin'} onClick={() => { setSelectedCoin('litecoin'); }} />
          </div>
        </div>
        <div className="payment-operation__calc">
          <FeeCalculator type={type} />
        </div>
      </ContentBox.Body>
    </ContentBox>
  );
};

PaymentOperation.propTypes = {
  type: PropTypes.string,
};

export default PaymentOperation;
