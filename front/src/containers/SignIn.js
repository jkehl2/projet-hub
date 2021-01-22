import { connect } from 'react-redux';

import SignIn from 'src/components/SignIn';

import { cleanAppParams } from 'src/store/actions/app';
import { updateSignInValue, execSignIn } from 'src/store/actions/user';
import { push } from 'connected-react-router';

const mapStateToProps = (state) => ({
  email: state.user.signInEmail,
  password: state.user.signInPassword,
  isError: state.app.isError,
  error: state.app.error,
  isMessage: state.app.isMessage,
  message: state.app.message,
});

const mapDispatchToProps = (dispatch) => ({
  setSignInValue: (payLoad) => {
    dispatch(updateSignInValue(payLoad));
  },
  handleSubmit: (event) => {
    event.preventDefault();
    dispatch(execSignIn());
  },
  redirectSignUp: (event) => {
    event.preventDefault();
    dispatch(push('/utilisateur/enregistrement'));
  },
  cleanAppParams: () => {
    dispatch(cleanAppParams());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
