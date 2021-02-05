/**
 * @module config-graphql
 * Configuration & queries to DB
 */
// == URL SERVER BACK
import CONFIG from './parameters.json';

export const apiUrl = CONFIG.URL_BACK;
// == CONFIGURATION CONNECTOR AXIOS GRAPHQL - END POINT + HEADERS
export default {
  method: 'post',
  url: `${CONFIG.URL_BACK}/graphql`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
};

// == CONFIGURATION CONNECTOR AXIOS SIGNIN - END POINT + HEADERS
export const signInConfig = {
  method: 'post',
  url: `${CONFIG.URL_BACK}/login-refresh`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
};

// == CONFIGURATION CONNECTOR AXIOS SIGNOUT - END POINT + HEADERS
export const signOutConfig = {
  method: 'post',
  url: `${CONFIG.URL_BACK}/logout`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
};

// == CONFIGURATION CONNECTOR AXIOS UPLOAD AVATAR - END POINT + HEADERS
export const uploadAvatarConfig = {
  method: 'post',
  url: `${CONFIG.URL_BACK}/upload-avatar`,
  headers: {
    'Content-type': 'multipart/form-data',
  },
  withCredentials: false,
};

// == CONFIGURATION CONNECTOR AXIOS UPLOAD IMAGE PROJECT - END POINT + HEADERS
export const uploadProjectImageConfig = {
  method: 'post',
  url: `${CONFIG.URL_BACK}/upload-image`,
  headers: {
    'Content-type': 'multipart/form-data',
  },
  withCredentials: false,
};

// == QUERY - CREATE USER PROFILE
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

// == QUERY - GET USER DETAILS BY ID
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

// == QUERY - EDIT USER
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

// == QUERY - EDIT USER PASSWORD
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

// == QUERY - DELETE USER PROFILE
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

// == QUERY - GET PROJECT BY ID
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
// == QUERY - DELETE PROJECT
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

// == QUERY - GET PROJECT BY GEOLOCATION

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

// == QUERY - CREATE PROJECT
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
// == QUERY - EDIT PROJECT
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
// == QUERY - GET ARCHIVED PROJECT
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
// == QUERY - GET COMPLETED
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
// == QUERY - GET UNCOMPLETED
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
// == QUERY - ADD NEED
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
// == QUERY - EDIT NEED
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
// == QUERY - DELETE NEED
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

// == QUERY - CREATE FAVORITE
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
// == QUERY - DELETE FAVORITE
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
