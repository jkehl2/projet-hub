/* eslint-disable no-nested-ternary */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS

// == IMPORTS COMPOSANTS
import {
  Button,
  Menu,
} from 'semantic-ui-react';
import ModalConfirm from 'src/components/ModalConfirm';

// == STYLES
import './projectMenu.scss';

// == Composant
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
  <Menu id="project-menu" compact icon secondary attached="bottom" borderless size="mini">
    {isEditMode
      ? (
        <Menu.Item
          name="backView"
          fitted="horizontally"
        >
          <Button
            type="button"
            icon="arrow alternate circle left"
            className="go-back-button"
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
            name="Editer"
            fitted="horizontally"
          >
            <Button
              type="button"
              icon="edit"
              className="edit-button"
              title="Editer"
              compact
              onClick={(event) => {
                event.preventDefault();
                setEditModeOn();
              }}
            />
          </Menu.Item>
          <Menu.Item
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
              name="backPrevius"
              fitted="horizontally"
            >
              <Button
                type="button"
                icon="arrow alternate circle left"
                className="go-back-button"
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
