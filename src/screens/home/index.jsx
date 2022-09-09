import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
// Redux
import { selectUser } from 'redux/auth/selectors';
// UI
import Container from 'components/container';
import Typography from 'components/typography';
import Button from 'components/button';
// Styles
import './styles.sass';

const HomeScreen = ({ user: { userData } }) => {
  const history = useHistory();

  React.useEffect(() => {
    if (userData) {
      history.push('/events');
    }
  }, [userData, history]);

  if (userData) {
    return <div />;
  }

  return (
    <div className="home-screen">
      <Container>
        <div className="home-screen__row">
          <div className="home-screen__info">
            <Typography component="h1" className="home-screen__title">Join today and have your favorite players carry you to victory</Typography>
            <Typography component="p" className="p-xl home-screen__text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.</Typography>
            <Button variant="accent" size="xl" onClick={() => history.push('/sign-up')}>Join now</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

HomeScreen.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

export default connect(mapStateToProps)(HomeScreen);
