/**
 * @module config-graphql
 * Configuration et requête d'accès à DB utilisateurs et projets
 */

// == URL SERVER BACK
import CONFIG from './config.json';

// == CONFIGURATION CONNECTEUR AXIOS GRAPHQL - END POINT + ENTÊTE
export default {
  method: 'post',
  url: `${CONFIG.URL_BACK}/graphql`,
  headers: {
    'Content-Type': 'application/json',
  },
};

// == CONFIGURATION CONNECTEUR AXIOS SIGNIN - END POINT + ENTÊTE
export const signInConfig = {
  method: 'post',
  url: `${CONFIG.URL_BACK}/login`,
  headers: {
    'Content-Type': 'application/json',
  },
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
  query: `mutation editUser($id: ID!, $name: String, $email: String) {
    editUser(id: $id, name: $name, email: $email) {
      id
      name
      email
    }
  }`,
};

// == QUERY - Supprimer le profil utlisateur
export const queryUserDelete = {
  query: `mutation deleteUser($id: ID!) {
    deleteUser(id: $id){
        msg
    }
  }`,
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
        lat
        long
        image
        archived
        author{
          name
          email
        }
        needs{
          title
          description
        }
        comments{
          content
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
  query: `query GetProjectsByGeo($lat: Float!, $long: Float!, $scope: Float!) {
    projectsByGeo(lat: $lat, long: $long, scope: $scope) {
      title
      description
      location
      lat
      long
      author{
        name
        email
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
