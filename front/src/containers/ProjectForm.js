import { connect } from 'react-redux';

import ProjectForm from 'src/components/Project/ProjectEdit/ProjectForm';

import {
  appUpdateProject,
  appRefreshProject,
  appCleanProject,
  appEditProjectOff,
  appProjectEdit,
} from 'src/store/actions/app';

const mapStateToProps = (state) => ({
  title: state.app.project.title,
  expiration_date: state.app.project.expiration_date,
  description: state.app.project.description,
  location: state.app.project.location,
});

const mapDispatchToProps = (dispatch) => ({
  syncProjectFields: () => {
    dispatch(appRefreshProject());
  },
  setProjectField: (payload) => {
    dispatch(appUpdateProject(payload));
  },
  handleSubmit: (event) => {
    event.preventDefault();
    dispatch(appProjectEdit());
  },
  handleCancel: (event) => {
    event.preventDefault();
    dispatch(appCleanProject());
    dispatch(appEditProjectOff());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
