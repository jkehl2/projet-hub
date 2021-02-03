import { connect } from 'react-redux';

import Home from 'src/components/Home';

import { appErrorClean, appMsgClean } from 'src/store/actions/app';

const mapDispatchToProps = (dispatch) => ({
  cleanAppParams: () => {
    dispatch(appErrorClean());
    dispatch(appMsgClean());
  },
});

export default connect(null, mapDispatchToProps)(Home);
