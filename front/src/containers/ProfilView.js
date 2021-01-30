import { connect } from 'react-redux';

import ProfilView from 'src/components/Profil/ProfilView';

import { push } from 'connected-react-router';
import { appEditProfilOn, appUpdateProfil, appConfirmDelete } from 'src/store/actions/app';

const mapStateToProps = (state) => ({
  name: state.user.name,
  email: state.user.email,
  avatar: state.user.avatar,
  deleteConfirm: state.app.profil.deleteConfirm,
});

const mapDispatchToProps = (dispatch) => ({
  setConfirmation: (payload) => {
    dispatch(appUpdateProfil(payload));
  },
  deleteProfil: (event) => {
    event.preventDefault();
    dispatch(appConfirmDelete());
  },
  switchToEditProFile: () => {
    dispatch(appEditProfilOn());
  },
  redirectToPasswordEdit: () => {
    dispatch(push('/utilisateur/motdepasse-edit'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilView);
