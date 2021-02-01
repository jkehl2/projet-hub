// == Import npm
import React from 'react';

// == IMPORTS COMPOSANTS
import {
  Segment,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './projectEdit.scss';
import ProjectForm from 'src/containers/ProjectForm';

// == Composant
const ProjectEdit = () => (
  <Segment basic>
    <ProjectForm />
  </Segment>
);

// == Export
export default ProjectEdit;
