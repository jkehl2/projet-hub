import { connect } from 'react-redux';

import Projects from 'src/components/Projects';

const mapStateToProps = (state) => ({
  projects: state.projets.Projects,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
