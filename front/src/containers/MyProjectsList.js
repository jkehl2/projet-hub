import { connect } from 'react-redux';

import List from 'src/components/Projects/List';
import {
  getProjectsByAuthor,
} from 'src/store/actions/project';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  projects: state.project.projects,
});

const mapDispatchToProps = (dispatch) => ({
  updateList: () => {
    dispatch(getProjectsByAuthor());
  },
  addToFavorite: () => {
    // MY PROJECT CAN't BE IN FAVORITE
  },
  removeFromFavorite: () => {
    // MY PROJECT CAN't BE IN FAVORITE
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
