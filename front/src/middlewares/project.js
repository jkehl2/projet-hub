/* eslint-disable camelcase */
// == IMPORT NPM
import { goBack, push } from 'connected-react-router';
import FormData from 'form-data';

// GRAPHQL QUERIES
import configGraphQl, {
  apiUrl,
  queryByAuthor,
  queryCreateProject,
  queryEditProject,
  queryProjectById,
  queryDeleteProject,
  queryGetProjectsByGeo,
  queryArchivedProject,
  queryInsertFavorite,
  queryDeleteFavorite,
  uploadProjectImageConfig,
} from 'src/apiConfig/';

import connector from 'src/apiConfig/queryWithToken';

// ACTIONS
import {
  GET_MY_PROJECTS,
  GET_MY_FAVORITES,
  PROJECT_CREATE,
  PROJECT_EDIT,
  PROJECT_DELETE_CURRENT,
  PROJECT_ARCHIVED_CURRENT,
  GET_PROJECT_BY_ID,
  GET_PROJECT_BY_GEO,
  PROJECT_ADD_FAVORITE_BY_ID,
  PROJECT_REMOVE_FAVORITE_BY_ID,
  PROJECT_UPLOAD_IMAGE,
  updateProjectStore,
  cleanProject,
  getProjectsByFavorites,
  updateProjectFavorite,
} from 'src/store/actions/project';

import {
  appLoadingOn,
  appLoadingOff,
  appMsgUpdate,
  appErrorUpdate,
  appMsgClean,
  appErrorClean,
  appUpdateProject,
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
      connector(config, 'projectsByGeo', store.dispatch)
        .then((response) => {
          const projects = response.data.data.projectsByGeo.map((project) => ({
            id: project.id,
            isFavorite: project.isFollowed,
            isArchived: project.archived,
            isAuthor: project.userIsAuthor,
            title: project.title,
            followers: project.followers.sort((follower1, follower2) => (
              parseInt(follower1.id, 10) > parseInt(follower2.id, 10) ? 1 : -1
            )),
            location: project.location,
            distance: parseFloat(project.distance),
            lat: parseFloat(project.lat),
            long: parseFloat(project.long),
            description: project.description.length > 75 ? `"${project.description.substr(0, 75)}..."` : `"${project.description}"`,
            expiration_date: parseDate(project.expiration_date),
            creation_date: parseDate(project.created_at),
            image: project.image === null || project.image === '' ? `${apiUrl}/project-images/logo.PNG` : `${apiUrl}${project.image}`,
            author: {
              id: project.author.id,
              name: project.author.name,
              email: project.author.email,
              avatar: project.author.avatar === null || project.author.avatar === '' ? 'https://react.semantic-ui.com/images/avatar/large/matt.jpg' : `${apiUrl}${project.author.avatar}`,
            },
            needs: project.needs.sort((need1, need2) => (
              parseInt(need1.id, 10) > parseInt(need2.id, 10) ? 1 : -1
            )),
          })).sort((proj1, proj2) => (
            proj1.distance > proj2.distance ? 1 : -1
          ));
          if (projects.length > 0) {
            store.dispatch(updateProjectStore({ projects }));
          }
          else {
            store.dispatch(appMsgUpdate('Aucun projet trouvé sur ce périmètre géographique.'));
          }
          store.dispatch(push('/projets'));
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error.message));
        })
        .finally(() => {
          store.dispatch(appLoadingOff());
        });
      store.dispatch(appLoadingOn());
      store.dispatch(appErrorClean());
      return;
    }
    case PROJECT_UPLOAD_IMAGE: {
      const data = new FormData();
      data.append('image', action.fileSrc);
      const { project: { project: { id: project_id } } } = store.getState();
      data.append('project_id', project_id);
      const config = {
        ...uploadProjectImageConfig,
        data,
      };
      connector(config, 'data', store.dispatch)
        .then((response) => {
          const { data: { data: { path } } } = response;
          const image = `${apiUrl}/${path}`;
          store.dispatch(appUpdateProject({ image }));
          store.dispatch(appMsgUpdate('Upload de l\'image projet terminé.'));
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error.message));
        })
        .finally(() => {
          store.dispatch(appLoadingOff());
        });
      store.dispatch(appMsgClean());
      store.dispatch(appErrorClean());
      store.dispatch(appLoadingOn());

      return;
    }
    case GET_PROJECT_BY_ID: {
      const data = JSON.stringify({
        ...queryProjectById,
        variables: { ...action.payload },
      });
      const config = {
        ...configGraphQl,
        data,
      };
      connector(config, 'project', store.dispatch)
        .then((response) => {
          const apiData = response.data.data.project;
          const project = {
            id: apiData.id,
            isFavorite: apiData.isFollowed,
            isArchived: apiData.archived,
            isAuthor: apiData.userIsAuthor,
            title: apiData.title,
            followers: apiData.followers.sort((follower1, follower2) => (
              parseInt(follower1.id, 10) > parseInt(follower2.id, 10) ? 1 : -1
            )),
            description: apiData.description,
            location: apiData.location,
            lat: parseFloat(apiData.lat),
            long: parseFloat(apiData.long),
            expiration_date: parseDate(apiData.expiration_date),
            creation_date: parseDate(apiData.created_at),
            image: apiData.image === null || apiData.image === '' ? `${apiUrl}/project-images/logo.PNG` : `${apiUrl}${apiData.image}`,
            author: {
              id: apiData.author.id,
              name: apiData.author.name,
              email: apiData.author.email,
              avatar: apiData.author.avatar === null || apiData.author.avatar === '' ? 'https://react.semantic-ui.com/images/avatar/large/matt.jpg' : `${apiUrl}${apiData.author.avatar}`,
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
    case PROJECT_CREATE: {
      const data = JSON.stringify({
        ...queryCreateProject,
        variables: {
          ...action.payload,
        },
      });
      const config = {
        ...configGraphQl,
        data,
      };
      connector(config, 'insertProject', store.dispatch)
        .then((response) => {
          const { data: { data: { insertProject: { id } } } } = response;
          store.dispatch(push(`/projet/${id}`));
          store.dispatch(appMsgUpdate('Vous avez créé une nouvelle fiche projet.'));
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
    case PROJECT_EDIT: {
      const data = JSON.stringify({
        ...queryEditProject,
        variables: {
          ...action.payload,
        },
      });
      const config = {
        ...configGraphQl,
        data,
      };
      connector(config, 'editProject', store.dispatch)
        .then(() => {
          store.dispatch(appMsgUpdate('Votre projet à été modifié.'));
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
    case PROJECT_DELETE_CURRENT: {
      const { project: { project: { id } } } = store.getState();
      const data = JSON.stringify({
        ...queryDeleteProject,
        variables: { id },
      });
      const config = {
        ...configGraphQl,
        data,
      };
      connector(config, 'deleteProject', store.dispatch)
        .then(() => {
          store.dispatch(goBack());
          store.dispatch(cleanProject());
          store.dispatch(appMsgUpdate('Votre projet à été supprimmé définitivement.'));
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
    case PROJECT_ARCHIVED_CURRENT: {
      const { project: { project: { id } } } = store.getState();
      const data = JSON.stringify({
        ...queryArchivedProject,
        variables: { id },
      });
      const config = {
        ...configGraphQl,
        data,
      };
      connector(config, 'archiveProject', store.dispatch)
        .then(() => {
          store.dispatch(cleanProject());
          store.dispatch(goBack());
          store.dispatch(appMsgUpdate('Votre projet à été archivé.'));
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
    case GET_MY_PROJECTS: {
      const data = JSON.stringify({
        ...queryByAuthor,
      });
      const config = {
        ...configGraphQl,
        data,
      };
      connector(config, 'myInfos', store.dispatch)
        .then((response) => {
          const projects = response.data.data.myInfos.projectsCreated.map((project) => ({
            id: project.id,
            isFavorite: project.isFollowed,
            isArchived: project.archived,
            isAuthor: project.userIsAuthor,
            title: project.title,
            followers: project.followers.sort((follower1, follower2) => (
              parseInt(follower1.id, 10) > parseInt(follower2.id, 10) ? 1 : -1
            )),
            location: project.location,
            lat: parseFloat(project.lat),
            long: parseFloat(project.long),
            description: project.description.length > 75 ? `"${project.description.substr(0, 75)}..."` : `"${project.description}"`,
            expiration_date: parseDate(project.expiration_date),
            creation_date: parseDate(project.created_at),
            image: project.image === null || project.image === '' ? `${apiUrl}/project-images/logo.PNG` : `${apiUrl}${project.image}`,
            author: {
              id: project.author.id,
              name: project.author.name,
              email: project.author.email,
              avatar: project.author.avatar === null || project.author.avatar === '' ? 'https://react.semantic-ui.com/images/avatar/large/matt.jpg' : `${apiUrl}${project.author.avatar}`,
            },
            needs: project.needs.sort((need1, need2) => (
              parseInt(need1.id, 10) > parseInt(need2.id, 10) ? 1 : -1
            )),
          })).sort((proj1, proj2) => (
            parseInt(proj1.id, 10) > parseInt(proj2.id, 10) ? 1 : -1
          ));
          store.dispatch(updateProjectStore({ projects }));
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error.message));
        })
        .finally(() => {
          store.dispatch(appLoadingOff());
        });
      store.dispatch(appLoadingOn());
      store.dispatch(appErrorClean());
      return;
    }
    case GET_MY_FAVORITES: {
      const data = JSON.stringify({
        ...queryByAuthor,
      });
      const config = {
        ...configGraphQl,
        data,
      };
      connector(config, 'myInfos', store.dispatch)
        .then((response) => {
          const projects = response.data.data.myInfos.projectsFollowed.map((project) => ({
            id: project.id,
            isFavorite: project.isFollowed,
            isArchived: project.archived,
            isAuthor: project.userIsAuthor,
            title: project.title,
            followers: project.followers.sort((follower1, follower2) => (
              parseInt(follower1.id, 10) > parseInt(follower2.id, 10) ? 1 : -1
            )),
            location: project.location,
            lat: parseFloat(project.lat),
            long: parseFloat(project.long),
            description: project.description.length > 75 ? `"${project.description.substr(0, 75)}..."` : `"${project.description}"`,
            expiration_date: parseDate(project.expiration_date),
            creation_date: parseDate(project.created_at),
            image: project.image === null || project.image === '' ? `${apiUrl}/project-images/logo.PNG` : `${apiUrl}${project.image}`,
            author: {
              id: project.author.id,
              name: project.author.name,
              email: project.author.email,
              avatar: project.author.avatar === null || project.author.avatar === '' ? 'https://react.semantic-ui.com/images/avatar/large/matt.jpg' : `${apiUrl}${project.author.avatar}`,
            },
            needs: project.needs.sort((need1, need2) => (
              parseInt(need1.id, 10) > parseInt(need2.id, 10) ? 1 : -1
            )),
          })).sort((proj1, proj2) => (
            parseInt(proj1.id, 10) > parseInt(proj2.id, 10) ? 1 : -1
          ));
          store.dispatch(updateProjectStore({ projects }));
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error.message));
        })
        .finally(() => {
          store.dispatch(appLoadingOff());
        });
      store.dispatch(appLoadingOn());
      store.dispatch(appErrorClean());
      return;
    }
    case PROJECT_ADD_FAVORITE_BY_ID: {
      const { id } = action;
      const data = JSON.stringify({
        ...queryInsertFavorite,
        variables: { id },
      });
      const config = {
        ...configGraphQl,
        data,
      };
      connector(config, 'insertFavorite', store.dispatch)
        .then((response) => {
          const {
            data: {
              data: {
                insertFavorite: {
                  project: {
                    id: idProject,
                    isFollowed: isFavorite,
                    followers,
                  },
                },
              },
            },
          } = response;
          store.dispatch(updateProjectFavorite(idProject, { isFavorite, followers }));
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
    case PROJECT_REMOVE_FAVORITE_BY_ID: {
      const { id } = action;
      const data = JSON.stringify({
        ...queryDeleteFavorite,
        variables: { id },
      });
      const config = {
        ...configGraphQl,
        data,
      };
      connector(config, 'deleteFavorite', store.dispatch)
        .then((response) => {
          const {
            data: {
              data: {
                deleteFavorite: {
                  project: {
                    id: idProject,
                    isFollowed: isFavorite,
                    followers,
                  },
                },
              },
            },
          } = response;

          if (action.refreshFavoriteLst) {
            store.dispatch(getProjectsByFavorites());
          }
          else {
            store.dispatch(updateProjectFavorite(idProject, { isFavorite, followers }));
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
    default:
      next(action);
      break;
  }
};

export default projectMiddleware;
