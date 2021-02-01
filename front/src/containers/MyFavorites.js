import { connect } from 'react-redux';

// eslint-disable-next-line import/no-unresolved
import MyFavorites from 'src/components/MyFavorites';
import { getProjectsByFavorites } from '../store/actions/project';

{ /* dispatcher une action de projects en passant par le middleware projects */ }

const mapDispatchToProps = (dispatch) => ({
  updateList: () => {
    dispatch(getProjectsByFavorites());
  },
});

export default connect(null, mapDispatchToProps)(MyFavorites);
