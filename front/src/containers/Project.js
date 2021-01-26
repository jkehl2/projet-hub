import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Project from 'src/components/Project/';

import { getProjectById, cleanProject } from 'src/store/actions/project';

const mapStateToProps = (state, ownProps) => ({
  projectId: ownProps.match.params.slug,
  project: state.project.project,
  logged: state.user.logged,
  isEditMode: state.app.isEditMode,
});

const mapDispatchToProps = (dispatch) => ({
  getProjectById: (projectId) => {
    dispatch(getProjectById(projectId));
  },
  cleanProject: () => {
    dispatch(cleanProject);
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Project));
