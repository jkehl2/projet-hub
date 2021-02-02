/**
 * @module config-graphql
 * Configuration et requête d'accès à DB utilisateurs et projets
 */
// == URL SERVER BACK
import CONFIG from './parameters.json';

export const apiUrl = CONFIG.URL_BACK;
// == CONFIGURATION CONNECTEUR AXIOS GRAPHQL - END POINT + ENTÊTE
export default {
  method: 'post',
  url: `${CONFIG.URL_BACK}/graphql`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
};

// == CONFIGURATION CONNECTEUR AXIOS SIGNIN - END POINT + ENTÊTE
export const signInConfig = {
  method: 'post',
  url: `${CONFIG.URL_BACK}/login`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
};

// == CONFIGURATION CONNECTEUR AXIOS SIGNOUT - END POINT + ENTÊTE
export const signOutConfig = {
  method: 'post',
  url: `${CONFIG.URL_BACK}/logout`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
};

// == QUERY - Créer le profil utlisateur
export const queryUserCreate = {
  query: `mutation createUser($name: String!, $email: String!, $password: String! ) {
    insertUser(name: $name, email: $email, password: $password) {
      ... on User{
        id
        name
        email
      }
      ... on Error{
        error{
          msg
          code
        }
      }
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
      ... on User{
        id
        name
        email
        avatar
      }
      ... on Error{
        error{
          msg
          code
        }
      }
    }
  }`,
};

// == QUERY - Modifier le mot de passe du profil utlisateur
export const queryUserEditPassword = {
  query: `mutation editUserPassword($password: String!) {
    editUserPassword(password: $password) {
      ... on User{
        id
        name
        email
        avatar
      }
      ... on Error{
        error{
          msg
          code
        }
      }
    }
  } `,
};

// == QUERY - Supprimer le profil utlisateur
export const queryUserDelete = {
  query: ` mutation{
    deleteUser{
      ... on User{
        id
      }
      ... on Error{
        error{
          msg
          code
        }
      }
    }
  }   `,
};

export const queryByAuthor = {
  query: `{myInfos{
      ... on User{
        id
        projectsCreated{
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
          isFollowed
          userIsAuthor
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
          followers{
            id
            name
          }
        }
        projectsFollowed{
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
          isFollowed
          userIsAuthor
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
          followers{
            id
            name
          }
        }
      }
      ... on Error{
        error{
          msg
          code
        }
      }
    }}`,
};
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
        isFollowed
        userIsAuthor
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
        followers{
          id
          name
        }
    }
  }`,
};

export const queryDeleteProject = {
  query: `mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      ... on Project{
        id
      }
      ... on Error{
        error{
          msg
          code
        }
      }
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
        distance
        lat 
        long
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
        isFollowed
        userIsAuthor
        needs{
          id
          completed
        }
        followers{
          id
          name
        }
    }
  }`,
};
export const queryCreateProject = {
  query: `mutation CreateProject($title: String!, $description: String!, $expiration_date: String!, $location: String!, $lat: Float!, $long: Float!, $image: String, $file: String) {
    insertProject(title: $title, description: $description, expiration_date: $expiration_date, location: $location, lat: $lat, long: $long, image: $image, file: $file) {
      __typename
      ... on Project{
        id
      }
      ... on Error{
        error{
          msg
          code
        }
      }
    }
}`,
};
export const queryEditProject = {
  query: `mutation EditProject($id: ID!, $title: String!, $description: String!, $expiration_date: String!, $location: String!, $lat: Float!, $long: Float!, $image: String, $file: String) {
    editProject(
      id: $id,
      title: $title,
      description: $description,
      expiration_date: $expiration_date,
      location: $location,
      lat: $lat,
      long: $long,
      image: $image,
      file: $file
  ) {
    ... on Project{
      id
    }
    ... on Error{
      error{
        msg
        code
      }
    }
  }
}
`,
};

export const queryArchivedProject = {
  query: `mutation archiveProject($id: ID!) {
    archiveProject(id: $id) {
      ... on Project{
        id
      }
      ... on Error{
        error{
          msg
          code
        }
      }
    }
  }`,
};

// == ==========================================
// == NEEDS PART

export const queryCompletedNeed = {
  query: `mutation completeNeed($id: ID!) {
    completeNeed(id: $id) {
      ... on Need{
        id
        completed
      }
      ... on Error{
        error{
          msg
          code
        }
      }      
    }
  }`,
};

export const queryUnCompletedNeed = {
  query: `mutation uncompleteNeed($id: ID!) {
    uncompleteNeed(id: $id) {
      ... on Need{
        id
        completed
      }
      ... on Error{
        error{
          msg
          code
        }
      }      
    }
  }`,
};

export const queryAddNeedToProject = {
  query: `mutation insertNeed($title: String!, $description: String!, $projectId: ID!) {
    insertNeed(title: $title, description: $description, project_id: $projectId) {
      ... on Need{
        id
        title
        description
      }
      ... on Error{
        error{
          msg
          code
        }
      }      
    }
  }`,
};

export const queryEditNeedById = {
  query: `mutation editNeed($id: ID!, $title: String!, $description: String!) {
    editNeed(id: $id, title: $title, description: $description) {
      ... on Need{
        id
      }
      ... on Error{
        error{
          msg
          code
        }
      }      
    }
  }`,
};

export const queryDeleteNeedById = {
  query: `mutation deleteNeed($id: ID!) {
    deleteNeed(id: $id) {
      ... on Need{
        id
      }
      ... on Error{
        error{
          msg
          code
        }
      }      
    }
  }`,
};

// == ============================
// == FAVORITES SECTION

export const queryInsertFavorite = {
  query: `mutation insertFavorite($id: ID!) {
    insertFavorite(projectId: $id) {
      ... on Favorite{
        project{
          id
          isFollowed
          followers{
            id
            name
          }
        }
      }
      ... on Error{
        error{
          msg
          code
        }
      }      
    }
  }`,
};
export const queryDeleteFavorite = {
  query: `mutation deleteFavorite($id: ID!) {
    deleteFavorite(projectId: $id) {
      ... on Favorite{
        project{
          id
          isFollowed
          followers{
            id
            name
          }
        }
      }
      ... on Error{
        error{
          msg
          code
        }
      }      
    }
  }`,
};
