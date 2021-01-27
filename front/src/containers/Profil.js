import { connect } from 'react-redux';

import Profil from 'src/components/Profil';

import { appEditProfilOn } from 'src/store/actions/app';

const mapStateToProps = (state) => ({
  name: state.user.name,
  email: state.user.email,
  avatar: state.user.avatar,
});

const mapDispatchToProps = (dispatch) => ({
  switchToEditProFile: () => {
    dispatch(appEditProfilOn());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
