// == IMPORT PACKAGES
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPONENTS
import {
  Segment,
} from 'semantic-ui-react';
import Description from './Description';
import Needs from './Needs';

// == STYLES
import './projectView.scss';

// == COMPONENT
const ProjectView = (props) => {
  const {
    project,
    logged,
    updateNeedIdCompleted,
    getProjectById,
  } = props;
  useEffect(() => {
    getProjectById();
  }, []);
  const isVisible = (logged && project.isAuthor && !project.isArchived);
  return (
    <>
      {/* DESCRIPTION */}
      <Description {...props} needs={project.needs} />

      {/* NEEDS */}
      <Needs
        isCheckEnable={isVisible}
        needs={project.needs}
        updateNeedIdCompleted={updateNeedIdCompleted}
      />
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
  updateNeedIdCompleted: PropTypes.func.isRequired,
  getProjectById: PropTypes.func.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
};

// == Export
export default ProjectView;
