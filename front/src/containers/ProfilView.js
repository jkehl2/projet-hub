import { connect } from 'react-redux';

import ProfilView from 'src/components/Profil/ProfilView';

import { updateUserStore, profilDeleteSubmit } from 'src/store/actions/user';
import { push } from 'connected-react-router';
import { appEditProfilOn } from 'src/store/actions/app';

const mapStateToProps = (state) => ({
  name: state.user.name,
  email: state.user.email,
  avatar: state.user.avatar,
  confirmation: state.user.confirmation,
});

const mapDispatchToProps = (dispatch) => ({
  setConfirmation: (payload) => {
    dispatch(updateUserStore(payload));
  },
  deleteProfil: () => {
    dispatch(profilDeleteSubmit());
  },
  switchToEditProFile: () => {
    dispatch(appEditProfilOn());
  },
  redirectToPasswordEdit: () => {
    dispatch(push('/utilisateur/motdepasse-edit'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilView);
