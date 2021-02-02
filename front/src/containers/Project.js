import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Project from 'src/components/Project/';

import {
  getProjectById,
  projectNeedIsCompleted,
  projectAddToFavoriteById,
  projectRemoveToFavoriteById,
} from 'src/store/actions/project';
import { appEditProjectOff } from 'src/store/actions/app';

const mapStateToProps = (state, ownProps) => ({
  projectId: ownProps.match.params.slug,
  project: state.project.project,
  logged: state.user.logged,
  isEditMode: state.app.project.isEditMode,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setEditModeOff: () => {
    dispatch(appEditProjectOff());
  },
  getProjectById: () => {
    dispatch(getProjectById(ownProps.match.params.slug));
  },
  updateNeedIdCompleted: (id, completed) => {
    dispatch(
      projectNeedIsCompleted({ id, completed }),
    );
  },
  addToFavorite: (id) => {
    dispatch(projectAddToFavoriteById(id));
  },
  removeFromFavorite: (id) => {
    dispatch(projectRemoveToFavoriteById(id));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Project));
