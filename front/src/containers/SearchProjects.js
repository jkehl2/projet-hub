import { connect } from 'react-redux';

import SearchProjects from 'src/components/SearchProjects';

import { appSearchUpdate } from 'src/store/actions/app';
import { searchProject } from 'src/store/actions/project';

const mapStateToProps = (state) => ({
  localite: state.app.search.localite,
  perimeter: state.app.search.perimeter,
  archived: state.app.search.archived,
});

const mapDispatchToProps = (dispatch) => ({
  setSearch: (payLoad) => {
    dispatch(appSearchUpdate(payLoad));
  },
  handleSubmit: () => (event) => {
    event.preventDefault();
    dispatch(searchProject());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProjects);
