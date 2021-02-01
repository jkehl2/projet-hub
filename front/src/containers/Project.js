import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Project from 'src/components/Project/';

import { getProjectById, projectNeedIsCompleted } from 'src/store/actions/project';

const mapStateToProps = (state, ownProps) => ({
  projectId: ownProps.match.params.slug,
  project: state.project.project,
  logged: state.user.logged,
  isEditMode: state.app.project.isEditMode,
});

const mapDispatchToProps = (dispatch) => ({
  getProjectById: (projectId) => {
    dispatch(getProjectById(projectId));
  },
  updateNeedIdCompleted: (id, completed) => {
    dispatch(
      projectNeedIsCompleted({ id, completed }),
    );
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Project));
