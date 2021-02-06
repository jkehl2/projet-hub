/* eslint-disable no-nested-ternary */
// == IMPORT PACKAGES
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORT COMPONENTS
import {
  Button,
  Menu,
} from 'semantic-ui-react';

import ModalConfirm from 'src/components/ModalConfirm';

// == STYLES
import './projectMenu.scss';

// == COMPONENT
const ProjectMenu = ({
  confirm,
  isEditMode,
  isAuthor,
  isArchived,
  isError,
  error,
  isMessage,
  message,
  setEditModeOn,
  setConfirmation,
  handleArchiveProject,
  handleDeleteProject,
  handleBackToView,
  handleBackToPrevius,
}) => (
  <Menu className="project-menu" compact icon secondary attached="bottom" borderless size="mini">
    {isEditMode
      ? (
        <Menu.Item
          className="project-menu--item"
          name="backView"
          fitted="horizontally"
        >
          <Button
            className="project-menu--go-back-button"
            type="button"
            icon="arrow alternate circle left"
            title="Revenir à la consultation"
            content="Retour"
            labelPosition="left"
            compact
            onClick={handleBackToView}
          />
        </Menu.Item>
      )
      : (!isArchived && isAuthor) && (
        <>
          <Menu.Item
            className="project-menu--item"
            name="Editer"
            fitted="horizontally"
          >
            <Button
              className="project-menu--edit-button"
              type="button"
              icon="edit"
              title="Editer"
              compact
              onClick={(event) => {
                event.preventDefault();
                setEditModeOn();
              }}
            />
          </Menu.Item>
          <Menu.Item
            className="project-menu--item"
            name="Archiver"
            fitted="horizontally"
          >
            <ModalConfirm
              title="Confirmer l'archivage définitif de votre projet"
              trigger={(
                <Button
                  icon="archive"
                  color="grey"
                  title="Archiver"
                  compact
                />
              )}
              confirm={confirm}
              setConfirmation={setConfirmation}
              handleAction={handleArchiveProject}
              isError={isError}
              error={error}
              isMessage={isMessage}
              message={message}
            />
          </Menu.Item>
          <Menu.Item
            className="project-menu--item"
            name="Supprimer"
            fitted="horizontally"
          >
            <ModalConfirm
              title="Confirmer la suppression définitive de votre projet"
              trigger={(
                <Button
                  icon="trash"
                  color="red"
                  title="Supprimer"
                  compact
                />
              )}
              confirm={confirm}
              setConfirmation={setConfirmation}
              handleAction={handleDeleteProject}
              isError={isError}
              error={error}
              isMessage={isMessage}
              message={message}
            />
          </Menu.Item>
        </>
      )}
    <>
      {(!isEditMode

            && (
            <Menu.Item
              className="project-menu--item"
              name="backPrevius"
              fitted="horizontally"
            >
              <Button
                className="menu--go-back-button"
                type="button"
                icon="arrow alternate circle left"
                title="Revenir à la page précédente"
                content="Retour"
                labelPosition="left"
                compact
                onClick={handleBackToPrevius}
              />
            </Menu.Item>
            )

        )}
    </>
  </Menu>
);
ProjectMenu.propTypes = {
  confirm: PropTypes.string.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  isAuthor: PropTypes.bool.isRequired,
  isArchived: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  isMessage: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  setEditModeOn: PropTypes.func.isRequired,
  setConfirmation: PropTypes.func.isRequired,
  handleArchiveProject: PropTypes.func.isRequired,
  handleDeleteProject: PropTypes.func.isRequired,
  handleBackToView: PropTypes.func.isRequired,
  handleBackToPrevius: PropTypes.func.isRequired,
};

// == Export
export default ProjectMenu;
