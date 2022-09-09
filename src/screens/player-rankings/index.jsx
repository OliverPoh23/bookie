import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
// Redux
import { fetchPlayerRankingsRequest } from 'redux/player-rankings/actions';
import { selectPlayerRankings } from 'redux/player-rankings/selectors';
// UI
import ScreenLayout from 'components/screen-layout';
import Table from 'components/table';
import ContentBox from 'components/content-box';
import Typography from 'components/typography';
import Select from 'components/select';
// Table content
import { tableContent } from './table-content';
// Styles
import './styles.sass';

const PlayerRankingsScreen = ({ fetchPlayerRankingsRequest, playerRankings: { loading, data, error } }) => {
  React.useLayoutEffect(() => {
    fetchPlayerRankingsRequest();
  }, [fetchPlayerRankingsRequest]);

  return (
    <ScreenLayout>
      <ContentBox className="player-rankings">
        <ContentBox.Header className="player-rankings__header">
          <div className="player-rankings__header-left">
            <Typography component="h3" className="player-rankings__header-title">Player Rankings</Typography>
          </div>
          <div className="player-rankings__header-right">
            <div className="player-rankings__header-select">
              <Select
                defaultValue={{ label: 'All', value: 'All' }}
                options={[
                  { value: 'All', label: 'All' },
                  { value: 'NAE', label: 'NAE' },
                  { value: 'NAW', label: 'NAW' },
                  { value: 'EU', label: 'EU' },
                  { value: 'BR', label: 'BR' },
                  { value: 'OCE', label: 'OCE' },
                ]}
              />
            </div>
          </div>
        </ContentBox.Header>
        <ContentBox.Body>
          <Table
            content={tableContent()}
            loading={loading}
            data={data}
            error={error}
            retry={fetchPlayerRankingsRequest}
            bordered
          />
        </ContentBox.Body>
      </ContentBox>
    </ScreenLayout>
  );
};

PlayerRankingsScreen.propTypes = {
  fetchPlayerRankingsRequest: PropTypes.func,
  playerRankings: PropTypes.object,
};

const mapStateToProps = () => createStructuredSelector({
  playerRankings: selectPlayerRankings
});

const mapDispatchToProps = {
  fetchPlayerRankingsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerRankingsScreen);
