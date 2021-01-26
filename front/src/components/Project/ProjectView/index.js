// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Segment,
} from 'semantic-ui-react';
import Description from './Description';
import Needs from './Needs';
import ProjectMenu from './ProjectMenu';
// == IMPORTS CONTAINERS

// == STYLES
import './projectView.scss';

// == Composant
const ProjectView = (props) => {
  const { project, logged } = props;
  return (
    <>
      {/* Menu projet - modifier / supprimer / archiver */}
      {(logged && project.isAuthor && !project.isArchived) && <ProjectMenu />}
      <Segment compact attached="top">
        {/* Description du projet */}
        <Description {...props} />
      </Segment>
      {/* Liste des besoins du projet */}
      <Needs needs={project.needs} />
    </>
  );
};
// == PROP TYPES
ProjectView.propTypes = {
  logged: PropTypes.bool.isRequired,
  project: PropTypes.shape({
    isAuthor: PropTypes.bool.isRequired,
    isArchived: PropTypes.bool.isRequired,
    needs: PropTypes.array.isRequired,
  }).isRequired,
};

// == Export
export default ProjectView;
