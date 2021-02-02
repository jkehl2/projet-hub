import { connect } from 'react-redux';

import ProfilView from 'src/components/Profil/ProfilView';

import { push } from 'connected-react-router';
import { appEditProfilOn, appUpdateProfil, appProfilConfirm } from 'src/store/actions/app';
import { deleteUser } from 'src/store/actions/user';

const mapStateToProps = (state) => ({
  name: state.user.name,
  email: state.user.email,
  avatar: state.user.avatar,
  confirm: state.app.profil.confirm,
});

const mapDispatchToProps = (dispatch) => ({
  setConfirmation: (payload) => {
    dispatch(appUpdateProfil(payload));
  },
  deleteProfil: (event) => {
    event.preventDefault();
    dispatch(appProfilConfirm(deleteUser));
  },
  switchToEditProFile: () => {
    dispatch(appEditProfilOn());
  },
  redirectToPasswordEdit: () => {
    dispatch(push('/utilisateur/motdepasse-edit'));
  },
  redirectToMyProjects: () => {
    dispatch(push('/utilisateur/projets'));
  },
  redirectToMyFavorites: () => {
    dispatch(push('/utilisateur/favoris'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilView);
