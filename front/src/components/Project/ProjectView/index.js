// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Segment,
} from 'semantic-ui-react';
import Description from './Description';
import Needs from './Needs';
// import Comments from './Comments';
import ProjectMenu from './ProjectMenu';
// == IMPORTS CONTAINERS

// == STYLES
import './projectView.scss';

// == Composant
const ProjectView = ({ isAuthor, isArchived, isFavorite }) => {
  const isMenu = isAuthor && !isArchived;
  return (
    <>
      {/* Menu projet - modifier / supprimer / archiver */}
      {(isMenu) && <ProjectMenu />}
      <Segment compact attached="top">
        {/* Description du projet */}
        <Description isFavorite={isFavorite} isArchived={isArchived} isAuthor={isAuthor} />
      </Segment>
      {/* Liste des besoins du projet */}
      <Needs />
      {/* Liste des commentaires du projet */}
      {/* <Comments isArchived /> */}
    </>
  );
};
// == PROP TYPES
ProjectView.propTypes = {
  isAuthor: PropTypes.bool.isRequired,
  isArchived: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

// == Export
export default ProjectView;
