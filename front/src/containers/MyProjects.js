import { connect } from 'react-redux';

import MyProjects from 'src/components/Projects/MyProjects';
import { getProjectsByAuthor } from '../store/actions/project';

{ /* dispatcher une action de projects en passant par le middleware projects */}
const mapDispatchToProps = (dispatch) => ({
  updateList: () => {
    dispatch(getProjectsByAuthor());
  },
});

export default connect(null, mapDispatchToProps)(MyProjects);
