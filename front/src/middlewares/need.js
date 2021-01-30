/* eslint-disable no-unused-vars */
// == IMPORT NPM
import axios from 'axios';
import { push } from 'connected-react-router';

// graphql queries
import configGraphQl, {
  queryCompletedNeed,
  queryUnCompletedNeed,
} from 'src/apiConfig/';

import connector from 'src/apiConfig/queryWithToken';

// actions from store
import {
  PROJECT_NEED_ISCOMPLETED,
  updateProjectNeed,
} from 'src/store/actions/project';

import {
  appLoadingOn,
  appLoadingOff,
  appErrorUpdate,
  appMsgClean,
  appErrorClean,

} from 'src/store/actions/app';

// == PARSE DATE UTIL FUNCTION :
const parseDate = (dateApiString) => (
  new Date(dateApiString).toLocaleDateString('fr-FR')
);

// mw
const projectMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case PROJECT_NEED_ISCOMPLETED: {
      const { id, completed } = action.payload;
      const data = JSON.stringify(
        completed
          ? {
            ...queryCompletedNeed,
            variables: { id },
          }
          : {
            ...queryUnCompletedNeed,
            variables: { id },
          },
      );
      const config = {
        ...configGraphQl,
        data,
      };
      connector(config, 'completeNeed', store.dispatch)
        .then((response) => {
          const { data: { data: { completeNeed } } } = response;
          store.dispatch(updateProjectNeed(completeNeed));
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error.message));
        })
        .finally(() => {
          store.dispatch(appLoadingOff());
        });
      store.dispatch(appLoadingOn());
      store.dispatch(appMsgClean());
      store.dispatch(appErrorClean());
      return;
    }
    default:
      next(action);
      break;
  }
};

export default projectMiddleware;
