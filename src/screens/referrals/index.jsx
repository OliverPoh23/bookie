import React from 'react';
// UI
import ScreenLayout from 'components/screen-layout';
import ContentBox from 'components/content-box';
import Box from 'components/box';
import Typography from 'components/typography';
import DataPreview from 'components/data-preview';
import Input from 'components/input';
import FormGroup from 'components/form-group';
import Button from 'components/button';
import Alert from 'components/alert';
// Styles
import './styles.sass';
// Data preview
import { dataPreviewContent } from './data-preview-content';

const ReferralsScreen = () => {
  const [copySuccess, setCopySuccess] = React.useState(false);
  const tempLink = 'https://fortbookie.com/?sref=fortbettor';

  const handleCopyClick = () => {
    setCopySuccess(true);
    navigator.clipboard.writeText(tempLink);
  };

  return (
    <ScreenLayout>
      <ContentBox className="referrals-screen">
        <ContentBox.Header>
          <Typography component="h3">Referrals</Typography>
        </ContentBox.Header>
        <ContentBox.Body>
          <Alert type="success" isActive={copySuccess} onClose={() => setCopySuccess(false)}>Copied successfully</Alert>
          <div className="referrals-screen__control">
            <div className="referrals-screen__control-items">
              <Box className="referrals-screen__box">
                <FormGroup label="Your Referral Link" last>
                  <div className="referrals-screen__box-group">
                    <Input value={tempLink} className="referrals-screen__box-input" disabled />
                    <Button variant="primary" size="lg" onClick={handleCopyClick}>Copy</Button>
                  </div>
                </FormGroup>
              </Box>
              <Box className="referrals-screen__box">
                <FormGroup label="Availible Earnings" last>
                  <div className="referrals-screen__box-group">
                    <Input value="$18.24" className="referrals-screen__box-input" disabled />
                    <Button variant="accent" size="lg">Claim</Button>
                  </div>
                </FormGroup>
              </Box>
            </div>
            <div className="referrals-screen__control-text">
              <Typography component="h6">Share the link above or have friends use the promo code <Typography component="span" className="text-accent-1">“fortbettor”</Typography>.<br />
              </Typography>
              <Typography component="p" className="text-gray-3">
                They will be rewarded with <Typography component="span" className="text-primary text-bold">rewards level 2</Typography> - and you will be rewarded with commission on all wagers, for life.
              </Typography>
            </div>
          </div>
          <div className="referrals-screen__graphics">
            <DataPreview content={dataPreviewContent()} />
          </div>
          <Typography component="h6">Earn Tier 2 (5%) at <Typography component="span" className="text-regular text-gray-3">- 10 Referrals + $500 wagered</Typography>
          </Typography>
        </ContentBox.Body>
      </ContentBox>
    </ScreenLayout>
  );
};

export default ReferralsScreen;
