import { connect } from 'react-redux';

import Menu from 'src/components/Menu';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  userName: state.user.name,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
