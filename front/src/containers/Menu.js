import { connect } from 'react-redux';

import Menu from 'src/components/Menu';

import { userSignOut } from 'src/store/actions/user';
import { appMsgUpdate } from 'src/store/actions/app';
import { push } from 'connected-react-router';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  userName: state.user.name,
});

const mapDispatchToProps = (dispatch) => ({
  handleDisconnect: () => {
    dispatch(userSignOut());
    dispatch(push('/'));
    dispatch(appMsgUpdate('Vous venez de vous déconnecter. Merci de votre visite'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
