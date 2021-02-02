/**
 * @module user-Reducer
 * Gestion du store projet
 */

// == IMPORT ACTIONS SUR STORE
import {
  PROJECT_STORE_UPDATE,
  PROJECT_STORE_CLEAN,
  PROJECT_CLEAN_PROJECTS,
  PROJECT_CLEAN_PROJECT,
  PROJECT_NEED_UPDATE_BY_ID,
  PROJECT_UPDATE_FAVORITE,
} from 'src/store/actions/project';

// ==  INITIAL STATE : a project object empty
export const projectInitialState = {
  id: 0,
  isFavorite: false,
  isArchived: false,
  isAuthor: false,
  title: '',
  location: '',
  lat: 0,
  long: 0,
  description: '',
  expiration_date: new Date().toLocaleDateString('fr-FR'),
  creation_date: new Date().toLocaleDateString('fr-FR'),
  image: '',
  author: {
    id: 0,
    name: '',
    email: '',
    avatar: '',
  },
  needs: [],
  followers: [],
};

// ==  INITIAL STATE : a project object containing an array
export const initialState = {
  projects: [],
  project: { ...projectInitialState },
};

// == USER REDUCER - Gestion du store projet
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case PROJECT_STORE_UPDATE:
      return {
        ...oldState,
        ...action.payload,
      };
    case PROJECT_STORE_CLEAN:
      return {
        ...initialState,
      };
    case PROJECT_CLEAN_PROJECTS:
      return {
        ...oldState,
        projects: [],
      };
    case PROJECT_CLEAN_PROJECT:
      return {
        ...oldState,
        project: { ...projectInitialState },
      };
    case PROJECT_NEED_UPDATE_BY_ID: {
      const [updatedNeed] = [oldState.project.needs
        .find((need) => need.id === action.payload.id)];
      updatedNeed.completed = action.payload.completed;

      const updatedNeeds = [...oldState.project.needs
        .filter((need) => need.id !== action.payload.id)];
      updatedNeeds.push(updatedNeed);

      return {
        ...oldState,
        project: {
          ...oldState.project,
          needs: updatedNeeds.sort((need1, need2) => (
            parseInt(need1.id, 10) > parseInt(need2.id, 10) ? 1 : -1
          )),
        },
      };
    }
    case PROJECT_UPDATE_FAVORITE: {
      let projectsCopy = [...oldState.projects.filter((project) => project.id !== action.id)];
      let [projectUpdate] = [oldState.projects.find((project) => project.id === action.id)];
      if (projectUpdate) {
        projectUpdate = {
          ...projectUpdate,
          ...action.payload,
        };
        projectsCopy.push(projectUpdate);
        projectsCopy = projectsCopy.sort((proj1, proj2) => (
          parseInt(proj1.id, 10) > parseInt(proj2.id, 10) ? 1 : -1
        ));
      }
      return {
        ...oldState,
        projects: projectsCopy,
        project: {
          ...oldState.project,
          ...action.payload,
        },
      };
    }
    default:
      return { ...oldState };
  }
};

export default reducer;
