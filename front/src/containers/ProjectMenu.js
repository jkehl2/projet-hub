import { connect } from 'react-redux';

import ProjectMenu from 'src/components/Project/ProjectView/ProjectMenu';

import { appUpdateProject, appConfirmDelete } from 'src/store/actions/app';
import { deleteProject } from 'src/store/actions/project';

const mapStateToProps = (state) => ({
  deleteConfirm: state.app.project.deleteConfirm,
});

const mapDispatchToProps = (dispatch) => ({
  setConfirmation: (payload) => {
    dispatch(appUpdateProject(payload));
  },
  deleteProject: (event) => {
    event.preventDefault();
    dispatch(appConfirmDelete(deleteProject));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectMenu);
