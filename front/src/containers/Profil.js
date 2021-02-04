import { connect } from 'react-redux';

import Profil from 'src/components/Profil';

const mapStateToProps = (state) => ({
  isEditMode: state.app.profil.isEditMode,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
