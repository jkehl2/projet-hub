import { connect } from 'react-redux';

import NeedsForm from 'src/components/Project/ProjectEdit/NeedsForm';

import {
  appRefreshNeedsArr,
  appCleanNeedFields,
  appUpdateNeedFields,
  appUpdateNeedArrFieldsById,
} from 'src/store/actions/app';
import {
  needAdd,
  needDelete,
  needEdit,
} from 'src/store/actions/need';

const mapStateToProps = (state) => ({
  needs: state.app.needs.needs,
  title: state.app.needs.fields.title,
  description: state.app.needs.fields.description,
});

const mapDispatchToProps = (dispatch) => ({
  syncNeedsArray: () => {
    dispatch(appRefreshNeedsArr());
  },
  cleanNewNeedFields: () => {
    dispatch(appCleanNeedFields());
  },
  syncNewNeedFields: (payload) => {
    dispatch(appUpdateNeedFields(payload));
  },
  syncEditNeedFields: (id, payload) => {
    dispatch(appUpdateNeedArrFieldsById(id, payload));
  },
  handleAddNeed: (event) => {
    event.preventDefault();
    dispatch(needAdd());
  },
  DeleteNeedById: (id) => {
    dispatch(needDelete(id));
  },
  EditNeedById: (id) => {
    dispatch(needEdit(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NeedsForm);
