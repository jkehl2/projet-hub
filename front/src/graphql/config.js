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
