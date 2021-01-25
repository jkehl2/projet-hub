import { connect } from 'react-redux';

import SignIn from 'src/components/SignIn';

import { updateSignInValue, execSignIn } from 'src/store/actions/user';
import { push } from 'connected-react-router';

const mapStateToProps = (state) => ({
  email: state.user.signInEmail,
  password: state.user.signInPassword,
});

const mapDispatchToProps = (dispatch) => ({
  setSignInValue: (payLoad) => {
    dispatch(updateSignInValue(payLoad));
  },
  handleSubmit: () => (event) => {
    event.preventDefault();
    dispatch(execSignIn());
  },
  redirectSignUp: () => (event) =>{
    event.preventDefault();
    dispatch(push('/utilisateur/enregistrement'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
