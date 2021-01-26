// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import ProjectCard from 'src/components/Projects/ProjectCard';

// == IMPORTS CONTAINERS

// == IMPORTS COMPOSANTS

// == STYLES
import './list.scss';

// == Composant
const List = ({ logged, projects }) => (
  <>
    {projects.map((project) => (
      <ProjectCard key={project.id} logged={logged} project={project} />
    ))}
  </>
);

// == PROP TYPES
List.propTypes = {
  logged: PropTypes.bool.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    isFavorite: PropTypes.bool.isRequired,
    isArchived: PropTypes.bool.isRequired,
    isAuthor: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    expiration_date: PropTypes.string.isRequired,
    creation_date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired).isRequired,
};
// == Export
export default List;
