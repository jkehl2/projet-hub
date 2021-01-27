import { connect } from 'react-redux';

import List from 'src/components/Projects/List';
import { searchProject } from 'src/store/actions/project';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  projects: state.project.projects,
});

const mapDispatchToProps = (dispatch) => ({
  updateList: () => {
    dispatch(searchProject());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
