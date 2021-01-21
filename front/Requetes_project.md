# Axios request 

## Get All projects
``` js
var axios = require('axios');
var data = JSON.stringify({
  query: `{projects
  {
    id
    title
    description
    created_at
    expiration_date
    location
    lat
    long
    scope
    west
    east
    north
    south
    image
    archived
    author{
      name
      email
    }
  }
}`,
  variables: {}
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

## Get Project (détails) by Id
``` js
var axios = require('axios');
var data = JSON.stringify({
  query: `query GetProjectDetailsByID ($id: ID!){
  project(id: $id){
    id
    title
    description
    created_at
    expiration_date
    location
    lat
    long
    scope
    west
    east
    north
    south
    image
    file
    archived
    author{
      name
      email
    }
    needs{
        id
      title
      description
    }
  }
}`,
  variables: {"id":"1"}
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
### Recherche
