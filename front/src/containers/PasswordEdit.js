import { connect } from 'react-redux';

import PasswordEdit from 'src/components/PasswordEdit';

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordEdit);
