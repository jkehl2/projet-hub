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
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorEmail: PropTypes.string.isRequired,
    expireDate: PropTypes.string.isRequired,
    createDate: PropTypes.string.isRequired,
    isAuthor: PropTypes.bool.isRequired,
    adress: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isArchived: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};
// == Export
export default List;
