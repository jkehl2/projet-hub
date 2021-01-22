import { connect } from 'react-redux';

import SearchProjects from 'src/components/SearchProjects';

import { updateSearch, execSearch } from 'src/store/actions/search';

const mapStateToProps = (state) => ({
  localite: state.searchProject.localite,
  perimeter: state.searchProject.perimeter,
  archived: state.searchProject.archived,
});

const mapDispatchToProps = (dispatch) => ({
  setSearch: (payLoad) => {
    dispatch(updateSearch(payLoad));
  },
  handleSubmit: () => (event) => {
    event.preventDefault();
    dispatch(execSearch());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProjects);
