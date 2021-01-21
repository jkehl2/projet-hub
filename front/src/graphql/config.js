export default {
  method: 'post',
  url: 'http://localhost:3000/graphql/',
  headers: {
    'Content-Type': 'application/json',
  },
};

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

export const queryUserEdit = {
  query: `mutation editUser($id: ID!, $name: String, $email: String) {
    editUser(id: $id, name: $name, email: $email) {
      id
      name
      email
    }
  }`,
};

export const queryUserDelete = {
  query: `mutation deleteUser($id: ID!) {
    deleteUser(id: $id){
        msg
    }
  }`,
};
