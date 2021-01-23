import { connect } from 'react-redux';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  isError: state.app.error.isError,
  error: state.app.error.error,
  isMessage: state.app.message.isMessage,
  message: state.app.message.message,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
