import { connect } from 'react-redux';

import CreateProject from 'src/components/CreateProject';

import { push } from 'connected-react-router';

import {
  appUpdateProject,
  appCleanProject,
  appProjectCreate,
} from 'src/store/actions/app';

const mapStateToProps = (state) => ({
  title: state.app.project.title,
  expiration_date: state.app.project.expiration_date,
  description: state.app.project.description,
  location: state.app.project.location,
});

const mapDispatchToProps = (dispatch) => ({
  cleanProjectFields: () => {
    dispatch(appCleanProject());
  },
  setProjectField: (payload) => {
    dispatch(appUpdateProject(payload));
  },
  handleSubmit: (event) => {
    event.preventDefault();
    dispatch(appProjectCreate());
  },
  handleCancel: (event) => {
    event.preventDefault();
    dispatch(appCleanProject());
    dispatch(push('/'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
