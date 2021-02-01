import { connect } from 'react-redux';

import ProjectMenu from 'src/components/Project/ProjectMenu';

import {
  appEditProjectOn,
  appUpdateProject,
  appProjectConfirm,
  appCleanProject,
  appEditProjectOff,
} from 'src/store/actions/app';
import {
  archiveProjectById,
  deleteProjectById,
} from 'src/store/actions/project';

const mapStateToProps = (state) => ({
  confirm: state.app.project.confirm,
  isEditMode: state.app.project.isEditMode,
});

const mapDispatchToProps = (dispatch) => ({
  setEditModeOn: () => {
    dispatch(appEditProjectOn());
  },
  setConfirmation: (payload) => {
    dispatch(appUpdateProject(payload));
  },
  handleArchiveProject: (event) => {
    event.preventDefault();
    dispatch(appProjectConfirm(archiveProjectById));
  },
  handleDeleteProject: (event) => {
    event.preventDefault();
    dispatch(appProjectConfirm(deleteProjectById));
  },
  handleBackToView: (event) => {
    event.preventDefault();
    dispatch(appCleanProject());
    dispatch(appEditProjectOff());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectMenu);
