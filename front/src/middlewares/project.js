/* eslint-disable no-unused-vars */
// == IMPORT NPM
import axios from 'axios';
import { push } from 'connected-react-router';

// graphql queries
import configGraphQl, {
  queryCreateProject, queryEditProject, queryProjectById, queryDeleteProject, queryGetProjectsByGeo,
} from 'src/apiConfig/';

import connector from 'src/apiConfig/queryWithToken';

// actions from store
import {
  PROJECT_CREATE,
  PROJECT_EDIT,
  PROJECT_DELETE,
  GET_PROJECT_BY_ID,
  GET_PROJECT_BY_GEO,
  updateProjectStore,
  cleanProject,
  cleanProjects,
  SEND_PROJECT,
} from 'src/store/actions/project';

import {
  appLoadingOn,
  appLoadingOff,
  appMsgUpdate,
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
    case GET_PROJECT_BY_GEO: {
      const data = JSON.stringify({
        ...queryGetProjectsByGeo,
        variables: action.payload,
      });
      const config = {
        ...configGraphQl,
        data,
      };
      axios(config)
        .then((response) => {
          const { user } = store.getState();
          const projects = response.data.data.projectsByGeo.map((project) => ({
            id: project.id,
            isFavorite: false,
            isArchived: project.archived,
            isAuthor: (parseInt(user.id, 10) === parseInt(project.author.id, 10)),
            title: project.title,
            location: project.location,
            description: project.description.length > 75 ? `"${project.description.substr(0, 75)}..."` : `"${project.description}"`,
            expiration_date: parseDate(project.expiration_date),
            creation_date: parseDate(project.created_at),
            image: project.image === null ? 'https://react.semantic-ui.com/images/wireframe/image.png' : project.image,
            author: {
              id: project.author.id,
              name: project.author.name,
              email: project.author.email,
              avatar: project.author.avatar === null ? 'https://react.semantic-ui.com/images/avatar/large/matt.jpg' : project.author.avatar,
            },
          }));
          store.dispatch(updateProjectStore({ projects }));
          store.dispatch(push('/projets'));
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error.message));
        })
        .finally(() => {
          store.dispatch(appLoadingOff());
        });
      return;
    }
    // CREATION
    case PROJECT_CREATE: {
      const {
        title, description, expirationDate, location, lat, long, author,
      } = action.payload;
      const data = JSON.stringify({
        ...queryCreateProject,
        variables: {
          title,
          description,
          expirationDate,
          location,
          lat,
          long,
          author,
        },
      });
      const config = {
        ...configGraphQl,
        data,
      };
      connector(config, 'insertProject', store.dispatch)
        .then((response) => {
          console.log(JSON.stringify(response.data));
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
    // EDITING
    case PROJECT_EDIT: {
      const {
        id, title, description, expirationDate, location, lat, long, author,
      } = action.payload;
      const data = JSON.stringify({
        ...queryEditProject,
        variables: {
          id, title, description, expirationDate, location, lat, long, author,
        },
      });
      const config = {
        ...configGraphQl,
        data,
      };
      connector(config, 'ResponseObjectName', store.dispatch)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error.message));
        })
        .finally(() => {
          store.dispatch(appLoadingOff());
        });
      store.dispatch(appLoadingOn());
      return;
    }
    // DELETING
    case PROJECT_DELETE: {
      const { id } = action.payload;
      const data = JSON.stringify({
        ...queryDeleteProject,
        variables: { id },
      });
      const config = {
        ...configGraphQl,
        data,
      };
      connector(config, 'ResponseObjectName', store.dispatch)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error.message));
        })
        .finally(() => {
          store.dispatch(appLoadingOff());
        });
      store.dispatch(appLoadingOn());
      return;
    }
    // GET BY ID == OK
    case GET_PROJECT_BY_ID: {
      const data = JSON.stringify({
        ...queryProjectById,
        variables: { ...action.payload },
      });
      const config = {
        ...configGraphQl,
        data,
      };
      axios(config)
        .then((response) => {
          const { user } = store.getState();
          const apiData = response.data.data.project;
          const project = {
            id: apiData.id,
            isFavorite: false,
            isArchived: apiData.archived,
            isAuthor: (parseInt(user.id, 10) === parseInt(apiData.author.id, 10)),
            title: apiData.title,
            description: apiData.description,
            location: apiData.location,
            expiration_date: parseDate(apiData.expiration_date),
            creation_date: parseDate(apiData.created_at),
            image: apiData.image === null ? 'https://react.semantic-ui.com/images/wireframe/image.png' : apiData.image,
            author: {
              id: apiData.author.id,
              name: apiData.author.name,
              email: apiData.author.email,
              avatar: apiData.author.avatar === null ? 'https://react.semantic-ui.com/images/avatar/large/matt.jpg' : apiData.author.avatar,
            },
            needs: apiData.needs.sort((need1, need2) => (
              parseInt(need1.id, 10) > parseInt(need2.id, 10) ? 1 : -1
            )),
          };
          store.dispatch(updateProjectStore({ project }));
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error.message));
        })
        .finally(() => {
          store.dispatch(appLoadingOff());
        });
      store.dispatch(cleanProject());
      store.dispatch(appLoadingOn());
      store.dispatch(appMsgClean());
      store.dispatch(appErrorClean());
      return;
    }
    case SEND_PROJECT: {
      // call API geocoding => generate long & lat of location
      // once we have those = create new act that will send actualised data to our API
      // once API send succes msg, redirect to needs page
      return;
    }
    default:
      next(action);
      break;
  }
};

export default projectMiddleware;
