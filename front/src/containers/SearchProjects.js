import { connect } from 'react-redux';

import SearchProjects from 'src/components/SearchProjects';
import { appSearchUpdate, appSearchExec } from 'src/store/actions/app';

const mapStateToProps = (state) => ({
  localite: state.app.search.localite,
  perimeter: state.app.search.perimeter,
  archived: state.app.search.archived,
  coordinates: state.app.search.coordinates,
});

const mapDispatchToProps = (dispatch) => ({
  setSearch: (payLoad) => {
    dispatch(appSearchUpdate(payLoad));
  },
  handleSubmit: () => (event) => {
    event.preventDefault();
    dispatch(appSearchExec());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProjects);
