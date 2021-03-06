import { connect } from 'react-redux';

import List from 'src/components/Projects/List';
import {
  searchProject,
  projectAddToFavoriteById,
  projectRemoveToFavoriteById,
} from 'src/store/actions/project';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  projects: state.project.projects,
});

const mapDispatchToProps = (dispatch) => ({
  updateList: () => {
    dispatch(searchProject());
  },
  addToFavorite: (id) => {
    dispatch(projectAddToFavoriteById(id));
  },
  removeFromFavorite: (id) => {
    dispatch(projectRemoveToFavoriteById(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
