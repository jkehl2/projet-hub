/**
 * @module config-graphql
 * Configuration et requête d'accès à DB utilisateurs et projets
 */

// == URL SERVER BACK
import CONFIG from './parameters.json';

// == CONFIGURATION CONNECTEUR AXIOS GRAPHQL - END POINT + ENTÊTE
export default {
  method: 'post',
  url: `${CONFIG.URL_BACK}/graphql`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

// == CONFIGURATION CONNECTEUR AXIOS SIGNIN - END POINT + ENTÊTE
export const signInConfig = {
  method: 'post',
  url: `${CONFIG.URL_BACK}/login`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

// == CONFIGURATION CONNECTEUR AXIOS SIGNOUT - END POINT + ENTÊTE
export const signOutConfig = {
  method: 'post',
  url: `${CONFIG.URL_BACK}/logout`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

// == QUERY - Créer le profil utlisateur
export const queryUserCreate = {
  query: `mutation CreateNewUser($name: String!, $email: String!, $password: String!) {
    insertUser(name: $name, email: $email, password: $password) {
      id
      name
      email
      activated
    }
  }`,
};

// == QUERY - Obtenir le détail d'un profil utlisateur par id
export const queryUserById = {
  query: `query GetUserByID($id: ID!) {
    user(id: $id){
      id
      name
      email
      avatar
      activated
    }
  }`,
};

// == QUERY - Modifier le profil utlisateur
export const queryUserEdit = {
  query: `mutation editUser($name: String!, $email: String!) {
    editUserInfos(name: $name, email: $email) {
      id
      name
      email
      avatar
    }
  }`,
};

// == QUERY - Modifier le mot de passe du profil utlisateur
export const queryUserEditPassword = {
  query: `mutation editUserPassword($password: String!) {
    editUserPassword(password: $password) {
      id
      name
      email
      avatar
    }
  } `,
};

// == QUERY - Supprimer le profil utlisateur
export const queryUserDelete = {
  query: ` mutation{
    deleteUser{
      infos
      errors
    }
  }   `,
};

//= = PROJECT QUERIES

// == QUERY - Get project by ID
export const queryProjectById = {
  query: `query GetProjectByID($id: ID!) {
    project(id: $id) {
        id
        title
        description
        created_at
        expiration_date
        location
        image
        archived
        author{
          id
          name
          email
          avatar
        }
        needs{
          id
          title
          description
          completed
        }
    }
  }`,
};

export const queryDeleteProject = {
  query: `mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      msg
    }
  }`,
};

export const queryGetProjectsByGeo = {
  query: `query GetProjectsByGeo($lat: Float!, $long: Float!, $scope: Float!, $archived: Boolean!) {
    projectsByGeo(lat: $lat, long: $long, scope: $scope, archived: $archived) {
      id
      title
      image
      location
      created_at
      expiration_date
      archived
      description
      author{
        id
        name
        email
        avatar
      }
    }
  }`,
};
export const queryCreateProject = {
  query: '',
};
export const queryEditProject = {
  query: '',
};
