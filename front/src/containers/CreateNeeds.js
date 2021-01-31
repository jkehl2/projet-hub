import { connect } from 'react-redux';

import CreateProject from 'src/components/CreateProject';

import { appCreateNeeds, appSubmitCreatedNeeds } from 'src/store/actions/app';

const mapStateToProps = (state) => ({
  titleNeed: state.app.createNeeds.titleNeed,
  descriptionNeed: state.app.createNeeds.descriptionNeed,
});

const mapDispatchToProps = (dispatch) => ({
  setCreateNeeds: (payload) => {
    dispatch(appCreateNeeds(payload));
  },
  handleSubmit: (event) => {
    event.preventDefault();
    dispatch(appSubmitCreatedNeeds());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
