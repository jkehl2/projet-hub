import { connect } from 'react-redux';

import ProjectMenu from 'src/components/Project/ProjectMenu';
import { goBack } from 'connected-react-router';

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
  isAuthor: state.project.project.isAuthor,
  isArchived: state.project.project.isArchived,
  isError: state.app.error.isError,
  error: state.app.error.error,
  isMessage: state.app.message.isMessage,
  message: state.app.message.message,
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
  handleBackToPrevius: (event) => {
    event.preventDefault();
    dispatch(goBack());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectMenu);
