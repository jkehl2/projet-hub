import { connect } from 'react-redux';

import MyProjects from 'src/components/MyProjects';
import { getProjectsByAuthor } from 'src/store/actions/project';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  updateList: () => {
    dispatch(getProjectsByAuthor());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);
