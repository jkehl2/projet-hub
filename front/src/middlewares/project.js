/* eslint-disable no-unused-vars */
// == IMPORT NPM
import axios from 'axios';
import { push } from 'connected-react-router';

// actions from store
import {
  PROJECT_SEARCH,
  PROJECT_CREATE,
  PROJECT_EDIT,
  PROJECT_DELETE,
  GET_PROJECT_BY_ID,
  GET_PROJECT_BY_GEO,
  getProjectByGeo,
  cleanProjectStore,
  updateProjectStore,
} from 'src/store/actions/project';

import {
  appLoadingOn,
  appLoadingOff,
  appMsgUpdate,
  appErrorUpdate,
  appMsgClean,
  appErrorClean,
} from 'src/store/actions/app';
// graphql queries
import configGraphQl, {
  queryCreateProject, queryEditProject, queryProjectById, queryDeleteProject, queryGetProjectsByGeo,
} from 'src/apiConfig/';

// == import utils to allow perimeter conversion
import perimetersValue from 'src/utils/perimeters.json';
import { useReducer } from 'react';

// mw
const projectMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case PROJECT_SEARCH: {
      // gathering values needed for geocoding
      const {
        app: {
          search: {
            localite,
            perimeter,
            archived,
          },
        },
      } = store.getState();
      const params = {
        access_key: 'dc7156f13f34218aa5540fe1ef67fb52',
        query: localite,
      };
      axios.get('http://api.positionstack.com/v1/forward', { params })
        .then((response) => {
          const geolocArr = response.data.data;
          if (geolocArr.length > 0) {
            const searchValue = {
              // long: geolocArr[0].longitude,
              // lat: geolocArr[0].latitude,
              lat: 2,
              long: 1.9,
              // scope: parseInt(perimetersValue.perimeters[perimeter].apiValue, 10),
              scope: 20000,
              archived: false,
            };
            store.dispatch(getProjectByGeo(searchValue));
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
      store.dispatch(cleanProjectStore());
      store.dispatch(appLoadingOn());
      return;
    }

    case GET_PROJECT_BY_GEO: {
      console.log(action.payload);
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
          const projet = response.data.projectsByGeo.map((project) => ({
            isFavorite: false,
            isArchived: project.archived,
            isAuthor: user.id === project.author.id,
            title: project.title,
            location: project.location,
            expiration_date: project.expiration_date,
            creation_date: project.created_at,
            image: project.image,
            author: {
              id: project.author.id,
              name: project.author.name,
              email: project.author.name,
              avatar: project.author.avatar === null ? 'https://react.semantic-ui.com/images/avatar/large/matt.jpg' : project.author.avatar,
            },
          }));
          store.dispatch(updateProjectStore({ projet }));
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
      const { id } = action.payload;
      const data = JSON.stringify({
        ...queryProjectById,
        variables: { id },
      });

      const config = {
        ...configGraphQl,
        data,
      };

      console.log('loader on');
      axios(config)
        .then((response) => {
          const { user } = store.getState();

          const projects = response.data.data.projectsById.map((project) => ({
            id: project.id,
            isFavorite: false,
            isArchived: project.archived,
            isAuthor: user.id === project.author.id,
            title: project.title,
            location: project.location,
            expiration_date: project.expiration_date,
            creation_date: project.created_at,
            image: project.image,
            author: {
              id: project.author.id,
              name: project.author.name,
              email: project.author.name,
              avatar: project.author.avatar === null ? 'https://react.semantic-ui.com/images/avatar/large/matt.jpg' : project.author.avatar,
            },
            needs: [
              {
                id: project.needs.id,
                title: project.needs.title,
                description: project.needs.description,
                checked: project.needs.completed,
              },
            ],
          }));

          store.dispatch(updateProjectStore({ projects }));
          store.dispatch(push('/projets'));
          // isFavorite: PropTypes.bool.isRequired,
          // isArchived: PropTypes.bool.isRequired,
          // isAuthor: PropTypes.bool.isRequired,
          // title: PropTypes.string.isRequired,
          // location: PropTypes.string.isRequired,
          // expiration_date: PropTypes.string.isRequired,
          // creation_date: PropTypes.string.isRequired,
          // image: PropTypes.string.isRequired,
          // author: PropTypes.shape({
          //   name: PropTypes.string.isRequired,
          //   email: PropTypes.string.isRequired,
          //   avatar: PropTypes.string.isRequired,
          // }).isRequired,

          // needs: PropTypes.arrayOf(PropTypes.shape({
          //   id: PropTypes.string.isRequired,
          //   title: PropTypes.string.isRequired,
          //   description: PropTypes.string.isRequired,
          //   checked: PropTypes.bool.isRequired,
          // }).isRequired).isRequired,

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
    default:
      next(action);
      break;
  }
};

export default projectMiddleware;
