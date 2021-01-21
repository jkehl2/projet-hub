/**
 * @module config-graphql
 * Configuration et requête d'accès à DB utilisateurs et projets
 */

// == CONFIGURATION CONNECTEUR AXIOS - END POINT + ENTÊTE
export default {
  method: 'post',
  url: 'http://localhost:3000/graphql/',
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
