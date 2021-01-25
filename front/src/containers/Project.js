import { connect } from 'react-redux';

import Project from 'src/components/Project/';

const mapStateToProps = (state, ownProps) => ({
  project: state.project.projects[ownProps.projectId],
  logged: state.user.logged,
  isEditMode: state.app.isEditMode,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
