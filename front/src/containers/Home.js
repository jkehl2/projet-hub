import { connect } from 'react-redux';

import Home from 'src/components/Home';

import { appErrorClean, appMsgClean } from 'src/store/actions/app';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  cleanAppParams: () => {
    dispatch(appErrorClean());
    dispatch(appMsgClean());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
