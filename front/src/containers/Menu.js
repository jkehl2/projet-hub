import { connect } from 'react-redux';

import Menu from 'src/components/Menu';

import { userSignOut } from 'src/store/actions/user';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  userName: state.user.name,
});

const mapDispatchToProps = (dispatch) => ({
  handleDisconnect: () => {
    dispatch(userSignOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
