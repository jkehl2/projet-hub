// == Import npm
import React, { useEffect } from 'react';
import PropTypes, { shape } from 'prop-types';
// == IMPORTS CONTAINERS

// == IMPORTS COMPOSANTS
import ProjectCard from 'src/components/Projects/ProjectCard';
import { Segment } from 'semantic-ui-react';

// == STYLES
import './list.scss';
import { useLocation } from 'react-router-dom';

// == Composant
const List = ({ logged, projects, updateList }) => {
  const location = useLocation();
  useEffect(() => {
    updateList();
  }, [location]);
  return (
    <Segment className="list--no-marged" basic compact>
      {projects.map((project) => (
        <ProjectCard key={project.id} logged={logged} project={project} />
      ))}
    </Segment>
  );
};

// == PROP TYPES
List.propTypes = {
  logged: PropTypes.bool.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    isFavorite: PropTypes.bool.isRequired,
    isArchived: PropTypes.bool.isRequired,
    isAuthor: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    followers: PropTypes.arrayOf(
      shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    expiration_date: PropTypes.string.isRequired,
    creation_date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired).isRequired,
  updateList: PropTypes.func.isRequired,
};
// == Export
export default List;
