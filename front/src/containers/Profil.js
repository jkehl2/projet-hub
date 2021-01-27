import { connect } from 'react-redux';

import Profil from 'src/components/Profil';
import { profilDeleteConfirm, profilDeleteSubmit } from 'src/store/actions/user';

import { appEditProfilOn } from 'src/store/actions/app';

const mapStateToProps = (state) => ({
  name: state.user.name,
  email: state.user.email,
  avatar: state.user.avatar,
  confirmation: state.user.confirmation,
});

const mapDispatchToProps = (dispatch) => ({
<<<<<<< HEAD
  setConfirmation: (payload) => {
    dispatch(profilDeleteConfirm(payload));
  },
  deleteProfil: () => {
    dispatch(profilDeleteSubmit());
=======
  switchToEditProFile: () => {
    dispatch(appEditProfilOn());
>>>>>>> cfc178f786ccc1636fffb83f759b4c606c5d2732
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
