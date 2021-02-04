import { connect } from 'react-redux';

import ProjectForm from 'src/components/Project/ProjectEdit/ProjectForm';

import {
  appUpdateProject,
  appRefreshProject,
  appProjectEdit,
} from 'src/store/actions/app';
import {
  projectUploadImage,
} from 'src/store/actions/project';

const mapStateToProps = (state) => ({
  title: state.app.project.title,
  expiration_date: state.app.project.expiration_date,
  description: state.app.project.description,
  image: state.app.project.image,
  location: state.app.project.location,
});

const mapDispatchToProps = (dispatch) => ({
  syncProjectFields: () => {
    dispatch(appRefreshProject());
  },
  setProjectField: (payload) => {
    dispatch(appUpdateProject(payload));
  },
  handleFileChange: (event) => {
    event.preventDefault();
    dispatch(projectUploadImage(event.target.files[0]));
  },
  handleSubmit: (event) => {
    event.preventDefault();
    dispatch(appProjectEdit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
