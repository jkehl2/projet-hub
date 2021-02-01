// == Import npm
import React from 'react';

// == IMPORTS CONTAINERS
import ProjectForm from 'src/containers/ProjectForm';
import NeedsForm from 'src/containers/NeedsForm';

// == IMPORTS COMPOSANTS

// == STYLES
import './projectEdit.scss';

// == Composant
const ProjectEdit = () => (
  <>
    <ProjectForm />
    <NeedsForm />
  </>
);

// == Export
export default ProjectEdit;
