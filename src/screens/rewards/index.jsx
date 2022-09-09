import React from 'react';
// UI
import ScreenLayout from 'components/screen-layout';
import ContentBox from 'components/content-box';
import Typography from 'components/typography';
import DataPreview from 'components/data-preview';
// Styles
import './styles.sass';
// Data preview
import { dataPreviewContent } from './data-preview-content';

const RewardsScreen = () => {
  return (
    <ScreenLayout>
      <ContentBox className="rewards-screen">
        <ContentBox.Header>
          <Typography component="h3" className="rewards-screen__header-title">Rewards</Typography>
        </ContentBox.Header>
        <ContentBox.Body>
          <DataPreview content={dataPreviewContent()} />
        </ContentBox.Body>
      </ContentBox>
    </ScreenLayout>
  );
};

export default RewardsScreen;
