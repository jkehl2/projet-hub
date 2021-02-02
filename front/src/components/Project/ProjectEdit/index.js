// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS
import ProjectForm from 'src/containers/ProjectForm';
import NeedsForm from 'src/containers/NeedsForm';

// == IMPORTS COMPOSANTS

// == STYLES
import './projectEdit.scss';

// == Composant
const ProjectEdit = ({ getProjectById }) => {
  useEffect(() => {
    getProjectById();
  }, []);
  return (
    <>
      <ProjectForm />
      <NeedsForm />
    </>
  );
};
// == PROP TYPES
ProjectEdit.propTypes = {
  getProjectById: PropTypes.func.isRequired,
};

// == Export
export default ProjectEdit;
