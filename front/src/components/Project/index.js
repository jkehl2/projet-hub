// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Container,
} from 'semantic-ui-react';
import ProjectView from './ProjectView';
import ProjectEdit from './ProjectEdit';
// == IMPORTS CONTAINERS

// == STYLES
import './project.scss';

// == Composant
const Project = ({
  isAuthor, isEditMode, isArchived, isFavorite,
}) => (
  <Container className="project">
    {isEditMode
      ? (
        <ProjectEdit
          project={
        {
          title: 'Hello world project',
          expireDate: '1986-10-10',
          description: "I'm in place",
          needs: [{
            id: '1',
            title: 'A Beautiful mind',
            description: 'Everithing it need to be.',
            isCompleted: true,
          }, {
            id: '2',
            title: 'A freak zone',
            description: 'Everithing it need to be.',
            isCompleted: true,
          }],
        }
      }
        />
      )
      : <ProjectView isAuthor={isAuthor} isArchived={isArchived} isFavorite={isFavorite} />}
  </Container>
);
// == PROP TYPES
Project.propTypes = {
  isAuthor: PropTypes.bool.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  isArchived: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

// == Export
export default Project;
