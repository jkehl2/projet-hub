import { connect } from 'react-redux';

import List from 'src/components/Projects/List';
import {
  getProjectsByFavorites,
  projectRemoveToFavoriteById,
} from 'src/store/actions/project';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  projects: state.project.projects,
});

const mapDispatchToProps = (dispatch) => ({
  updateList: () => {
    dispatch(getProjectsByFavorites());
  },
  addToFavorite: () => {
    // NO ADD TO FAVORITE INNER FAVORTIES PAGE
  },
  removeFromFavorite: (id) => {
    dispatch(projectRemoveToFavoriteById(id, true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
