/* eslint-disable import/no-unresolved */
// == Import npm
import React, { useEffect } from 'react';

// == IMPORTS CONTAINERS
import List from 'src/containers/MyProjects';

// == IMPORTS COMPOSANTS
import {
  Container,
} from 'semantic-ui-react';

// == STYLES
import './myProjects.scss';

// == Composant
const MyProjects = ({ updateList }) => {
  useEffect(() => {
    updateList();
  }, []);
  return (
    <Container className="my-projects">
      { /* coder une fonction qui sera appellée dans un use effect */}
      {/* et déclenchera une requête permettant d'afficher les projets de la personne connectée */}
      <List />
    </Container>
  );
};

// == Export
export default MyProjects;
