import { connect } from 'react-redux';

import SignIn from 'src/components/SignIn';

import {
  appClean, appSignInUpdate, appMsgClean, appErrorClean, appSignInClean,
} from 'src/store/actions/app';
import { execSignIn } from 'src/store/actions/user';
import { push } from 'connected-react-router';

const mapStateToProps = (state) => ({
  email: state.app.signIn.email,
  password: state.app.signIn.password,
});

const mapDispatchToProps = (dispatch) => ({
  setSignInValue: (payLoad) => {
    dispatch(appSignInUpdate(payLoad));
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
    dispatch(appMsgClean());
    dispatch(appErrorClean());
    dispatch(appSignInClean());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
