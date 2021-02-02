import { connect } from 'react-redux';

import SignUp from 'src/components/SignUp';

import {
  appSetUpSignUp, appCreateUserVerif,
} from 'src/store/actions/app';

import { push } from 'connected-react-router';

const mapStateToProps = (state) => ({
  email: state.app.signUp.email,
  password: state.app.signUp.password,
  passwordVerification: state.app.signUp.passwordVerification,
  name: state.app.signUp.name,
});

const mapDispatchToProps = (dispatch) => ({
  setSignUp: (payLoad) => {
    dispatch(appSetUpSignUp(payLoad));
  },
  handleSubmit: (event) => {
    event.preventDefault();
    dispatch(appCreateUserVerif());
  },
  redirectHome: (event) => {
    event.preventDefault();
    dispatch(push('/'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
