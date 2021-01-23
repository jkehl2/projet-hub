import { connect } from 'react-redux';

import App from 'src/components/App';

// == IMPORT ACTIONS SUR PARAMETRES APPLICATIF TECHNIQUE
import { appMsgUpdate } from 'src/store/actions/app';

const mapStateToProps = (state) => ({
  isError: state.app.error.isError,
  error: state.app.error.error,
  isMessage: state.app.message.isMessage,
  message: state.app.message.message,
});

const mapDispatchToProps = (dispatch) => ({
  setMessage: (message) => {
    dispatch(appMsgUpdate(message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
