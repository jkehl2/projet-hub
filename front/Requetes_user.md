# Axios request

## Create user profil

``` js
var axios = require('axios');
var data = JSON.stringify({
  query: `mutation CreateNewUser($name: String!, $email: String!, $password: String!) {
  insertUser(name: $name, email: $email, password: $password) {
    id
    name
    email
    activated
  }
}`,
  variables: {"name":"jean","email":"jean@lolo.fr","password":"plop"}
});

var config = {
  method: 'post',
  url: 'http://localhost:3000/graphql/',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

```

## Get user profil

``` js
var axios = require('axios');
var data = JSON.stringify({
  query: `query GetUserByID($id: ID!) {
  user(id: $id){
    id
    name
    email
    avatar
    activated
  }
}`,
  variables: {"id":"3"}
});

var config = {
  method: 'post',
  url: 'http://localhost:3000/graphql/',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

## Edit user profile

``` js
var axios = require('axios');
var data = JSON.stringify({
  query: `mutation editUser($id: ID!, $name: String, $email: String) {
  editUser(id: $id, name: $name, email: $email) {
    id
    name
    email
  }
}`,
  variables: {"id":"3","name":"toto","email":"plop@plop.fr"}
});

var config = {
  method: 'post',
  url: 'http://localhost:3000/graphql/',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

## Delete user profil

``` js
var axios = require('axios');
var data = JSON.stringify({
  query: `mutation deleteUser($id: ID!) {
  deleteUser(id: $id){
      msg
  }
}`,
  variables: {"id":"3"}
});

var config = {
  method: 'post',
  url: 'http://localhost:3000/graphql/',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

```
