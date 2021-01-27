import { connect } from 'react-redux';

import Profil from 'src/components/Profil';
import { profilDeleteConfirm, profilDeleteSubmit } from 'src/store/actions/user';

const mapStateToProps = (state) => ({
  name: state.user.name,
  email: state.user.email,
  avatar: state.user.avatar,
  confirmation: state.user.confirmation,
});

const mapDispatchToProps = (dispatch) => ({
  setConfirmation: (payload) => {
    dispatch(profilDeleteConfirm(payload));
  },
  deleteProfil: () => {
    dispatch(profilDeleteSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
