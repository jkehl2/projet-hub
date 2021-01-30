/* eslint-disable no-unused-vars */
// == IMPORT NPM
import axios from 'axios';
import { push } from 'connected-react-router';

// graphql queries
import configGraphQl, {
  apiUrl,
  queryCreateProject, queryEditProject, queryProjectById, queryDeleteProject, queryGetProjectsByGeo,
} from 'src/apiConfig/';

// == import utils to allow perimeter conversion
import perimetersValue from 'src/utils/perimeters.json';

import connector from 'src/apiConfig/queryWithToken';

import querystring from 'query-string';

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
  sendProjectCreated,
  SEND_CREATED_PROJECT,
} from 'src/store/actions/project';

import {
  appLoadingOn,
  appLoadingOff,
  appMsgUpdate,
  appErrorUpdate,
  appMsgClean,
  appErrorClean,
  cleanCreateProject,
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
          title, description, expirationDate, location, lat, long, author,
        },
      });

      const config = {
        ...configGraphQl,
        data,
      };

      console.log('loader on');
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

      console.log('loader on');
      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log('loader off');
        });
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

      console.log('loader on');
      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log('loader off');
        });
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
            needs: apiData.needs,
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
      return;
    }
    case SEND_PROJECT: {
      // call API geocoding => generate long & lat of location
      const {
        app: {
          createProject: {
            title, date, description, location, perimeter,
          },
        },
      } = store.getState();

      // building query
      const query = querystring.stringifyUrl({
        url: 'https://nominatim.openstreetmap.org/search',
        query: {
          adressdetails: 1,
          q: location,
          format: 'json',
          limit: 1,
        },
      });
      axios.get(query)
        .then((response) => {
          const geolocArr = response.data;
          if (geolocArr.length > 0) {
            const searchValue = {
              long: parseFloat(geolocArr[0].long),
              lat: parseFloat(geolocArr[0].lat),
              scope: parseInt(perimetersValue.perimeters[perimeter].apiValue, 10),
            };
            store.dispatch(sendProjectCreated(searchValue));
          }
          else {
            store.dispatch(appMsgUpdate('Localité inconnue merci de préciser.'));
          }
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error.message));
          store.dispatch(appLoadingOff());
        });
      store.dispatch(appErrorClean());
      store.dispatch(appMsgClean());
      store.dispatch(appLoadingOn());
      return;

      // once we have those = create new act that will send actualised data to our API
      // once API send succes msg, redirect to needs page
    }

    case SEND_CREATED_PROJECT: {
      // get the result of geocoding API
      const { long, lat, scope } = action.payload;
      // get other values from store
      const {
        app: {
          createProject: {
            title, date, description, location,
          },
        },
      } = store.getState();

      const data = JSON.stringify({
        ...queryCreateProject,
        variables: {
          long, lat, scope, title, date, description, location,
        },
      });

      const config = {
        ...configGraphQl,
        data,
      };
      // send values
      connector(config, 'insertProject', store.dispatch)
        .then((response) => {
          // redirect to needs page
          store.dispatch(appMsgUpdate('Projet crée ! '));
          store.dispatch(push('/utilisateur/create/needs'));
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error.message));
        })
        .finally(() => {
          store.dispatch(appLoadingOff());
          store.dispatch(cleanCreateProject());
        });

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
