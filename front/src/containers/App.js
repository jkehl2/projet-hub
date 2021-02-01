import { connect } from 'react-redux';

import App from 'src/components/App';

// == IMPORT ACTIONS SUR PARAMETRES APPLICATIF TECHNIQUE
import { appErrorUpdate } from 'src/store/actions/app';

const mapStateToProps = (state) => ({
  isError: state.app.error.isError,
  error: state.app.error.error,
  isMessage: state.app.message.isMessage,
  message: state.app.message.message,
  logged: state.user.logged,
  loading: state.app.loading,
});

const mapDispatchToProps = (dispatch) => ({
  setError: (message) => {
    dispatch(appErrorUpdate(message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
