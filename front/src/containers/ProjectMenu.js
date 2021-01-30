import { connect } from 'react-redux';

import ProjectMenu from 'src/components/Project/ProjectView/ProjectMenu';

import { appUpdateProject, appProjectConfirm } from 'src/store/actions/app';
import { archiveProjectById, deleteProjectById } from 'src/store/actions/project';

const mapStateToProps = (state) => ({
  confirm: state.app.project.confirm,
});

const mapDispatchToProps = (dispatch) => ({
  setConfirmation: (payload) => {
    dispatch(appUpdateProject(payload));
  },
  archiveProject: (event) => {
    event.preventDefault();
    dispatch(appProjectConfirm(archiveProjectById));
  },
  deleteProject: (event) => {
    event.preventDefault();
    dispatch(appProjectConfirm(deleteProjectById));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectMenu);
