import { connect } from 'react-redux';

import CreateProject from 'src/components/CreateProject';

import { appCreateProject, appSubmitCreatedProject } from 'src/store/actions/app';

const mapStateToProps = (state) => ({
  title: state.app.createProject.title,
  date: state.app.createProject.date,
  description: state.app.createProject.description,
  location: state.app.createProject.location,
  perimeter: state.app.createProject.perimeter,
});

const mapDispatchToProps = (dispatch) => ({
  setCreateProject: (payload) => {
    dispatch(appCreateProject(payload));
  },
  handleSubmit: (event) => {
    event.preventDefault();
    dispatch(appSubmitCreatedProject());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
