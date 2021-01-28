import { connect } from 'react-redux';

import Profil from 'src/components/Profil';
import { updateUserStore, profilDeleteSubmit } from 'src/store/actions/user';

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
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
