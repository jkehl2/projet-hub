import { connect } from 'react-redux';

import ProfilEdit from 'src/components/Profil/ProfilEdit';

import { appUpdateProfil, appRefreshProfil, appProfilClean } from 'src/store/actions/app';
import { editUser, userUploadAvatar } from 'src/store/actions/user';

const mapStateToProps = (state) => ({
  name: state.app.profil.name,
  email: state.app.profil.email,
  avatar: state.app.profil.avatar,
});

const mapDispatchToProps = (dispatch) => ({
  refreshAppProfil: () => {
    dispatch(appRefreshProfil());
  },
  setProfilValue: (payload) => {
    dispatch(appUpdateProfil(payload));
  },
  cleanProfil: () => {
    dispatch(appProfilClean());
  },
  handleFileChange: (event) => {
    event.preventDefault();
    dispatch(userUploadAvatar(event.target.files[0]));
  },
  handleSubmit: (event) => {
    event.preventDefault();
    dispatch(editUser());
  },
  handleCancel: (event) => {
    event.preventDefault();
    dispatch(appProfilClean());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilEdit);
