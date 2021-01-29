import { connect } from 'react-redux';

import PasswordEdit from 'src/components/PasswordEdit';

import { push } from 'connected-react-router';
import { appUpdateProfil, appProfilClean, appConfirmPassword } from 'src/store/actions/app';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.app.profil.password,
  passwordConfirm: state.app.profil.passwordConfirm,
});

const mapDispatchToProps = (dispatch) => ({
  cleanProfil: () => {
    dispatch(appProfilClean());
  },
  setProfilValue: (payload) => {
    dispatch(appUpdateProfil(payload));
  },
  handleSubmit: (event) => {
    event.preventDefault();
    dispatch(appConfirmPassword());
  },
  abortConfirmPassword: (event) => {
    event.preventDefault();
    dispatch(appProfilClean());
    dispatch(push('/utilisateur/profil'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordEdit);
