import { connect } from 'react-redux';

import SearchProjects from 'src/components/SearchProjects';
import { appSearchUpdate } from 'src/store/actions/app';
import { searchProject } from 'src/store/actions/project';
import { push } from 'connected-react-router';

const mapStateToProps = (state) => ({
  localite: state.app.search.localite,
  perimeter: state.app.search.perimeter,
  archived: state.app.search.archived,
});

const mapDispatchToProps = (dispatch, OwnProps) => ({
  setSearch: (payLoad) => {
    dispatch(appSearchUpdate(payLoad));
  },
  handleSubmit: () => (event) => {
    event.preventDefault();
    if (OwnProps.isHome) {
      dispatch(push('/projets'));
    }
    else {
      dispatch(searchProject());
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProjects);
