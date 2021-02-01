// == IMPORT NPM
// == IMPORTS graphql queries
import configGraphQl, {
  queryCompletedNeed,
  queryUnCompletedNeed,
  queryAddNeedToProject,
  queryDeleteNeedById,
  queryEditNeedById,
} from 'src/apiConfig/';

// == IMPORT CONNECTOR FOR SECU BACK GRAPHQL API
import connector from 'src/apiConfig/queryWithToken';

// == IMPORTS ACTIONS FROM NEED PART
import {
  PROJECT_NEED_ISCOMPLETED,
  updateProjectNeed,
} from 'src/store/actions/project';

// == IMPORTS ACTIONS FROM PROJECT PART
import {
  NEED_ADD,
  NEED_DELETE,
  NEED_EDIT,
} from 'src/store/actions/need';

// == IMPORTS ACTIONS FROM APP PART
import {
  appLoadingOn,
  appLoadingOff,
  appErrorUpdate,
  appMsgClean,
  appErrorClean,
  appAddNeedToArray,
  appDeleteNeedInArrayById,
} from 'src/store/actions/app';

// == NEED MIDDLEWARE SWITCH ACTION TYPE CASE
const needMiddleware = (store) => (next) => (action) => {
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
      connector(config, completed ? 'completeNeed' : 'uncompleteNeed', store.dispatch)
        .then((response) => {
          if (completed) {
            const { data: { data: { completeNeed } } } = response;
            store.dispatch(updateProjectNeed(completeNeed));
          }
          else {
            const { data: { data: { uncompleteNeed } } } = response;
            store.dispatch(updateProjectNeed(uncompleteNeed));
          }
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
    case NEED_ADD: {
      const {
        app:
        {
          needs: {
            fields: {
              title,
              description,
            },
          },
          project: {
            id: projectId,
          },
        },
      } = store.getState();
      const data = JSON.stringify({
        ...queryAddNeedToProject,
        variables: {
          projectId,
          title,
          description,
        },
      });
      const config = {
        ...configGraphQl,
        data,
      };
      connector(config, 'editNeed', store.dispatch)
        .then((response) => {
          const { data: { data: { editNeed: { newNeed } } } } = response;
          store.dispatch(appAddNeedToArray(newNeed));
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
    case NEED_DELETE: {
      const { id } = action.payload;
      const data = JSON.stringify({
        ...queryDeleteNeedById,
        variables: {
          id,
        },
      });
      const config = {
        ...configGraphQl,
        data,
      };
      connector(config, 'deleteNeed', store.dispatch)
        .then(() => {
          store.dispatch(appDeleteNeedInArrayById(id));
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
    case NEED_EDIT: {
      const { id } = action.payload;
      const {
        app:
        {
          needs: {
            needs,
          },
        },
      } = store.getState();
      const needFields = needs.find((need) => need.id === id);
      const data = JSON.stringify({
        ...queryEditNeedById,
        variables: {
          id: needFields.id,
          title: needFields.title,
          description: needFields.description,
        },
      });
      const config = {
        ...configGraphQl,
        data,
      };
      connector(config, 'deleteNeed', store.dispatch)
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

export default needMiddleware;
