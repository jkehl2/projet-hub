// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Item, Icon, Label, Image, Segment, Grid,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './CardProjects.scss';

// == Composant
const CardProjects = ({ projects }) => (

  // debut de la grille pour la mise en place - Beginning of Grid
  <Grid>
    <Item.Group divided>
      { projects.map((project) => (
        <Item key={project.id}>
          {/* grille sur trois colonnes - grid on three columns * */}
          <Grid.Column VerticalAlign="center" width={3}>
            {/* emplacement de l'image du projet - location of project image* */}
            <Item.Image spaced size="small" src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          {/* grille sur sept colonnes - grid on seven columns * */}
          <Grid.Column VerticalAlign="center" width={7}>
            {/* entête et titre du projet - header and project title * */}
            <Item.Header as="h1">
              <span>{`${project.title}`}</span>
              {!project.isAuthor && (project.isFavorite ? <Icon name="star" /> : <Icon name="star outline" />)}
            </Item.Header>
            <Item.Meta>
              {/* avatar du createur du projet - creator project avatar * */}
              <Image avatar spaced="right" src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
              {/* Nom de l'auteur et email - author's name and email * */}
              <Label as="a" href="mailto:george.orwell@localhub.fr">
                <span>{`${project.author}`}</span>
                <Label.Detail>{`${project.authorEmail}`}</Label.Detail>
              </Label>
              <Segment basic textAlign="left">
                <Label color="green">
                  Date création
                  <Label.Detail>
                    {`${project.createDate}`}
                  </Label.Detail>
                </Label>
                <Label color="red">
                  Date expiration
                  <Label.Detail>
                    {`${project.expireDate}`}
                  </Label.Detail>
                </Label>
              </Segment>
            </Item.Meta>
          </Grid.Column>
          {/* grille sur trois colonnes - grid on three columns * */}
          <Grid.Column VerticalAlign="bottom" width={3}>
            <Item.Extra>
              {/* adresse de l'auteur du projet - author's adress * */}
              <Segment basic textAlign="right">
                <Label>
                  Adresse
                  <Label.Detail>{`${project.adress}`}</Label.Detail>
                </Label>
              </Segment>
            </Item.Extra>
          </Grid.Column>
          {/* etiquette archivé/non archivé du projet -archived/not archived project's tag * */}
          <Grid.Column VerticalAlign="center" width={3}>
            { project.isArchived && <Label as="span" tag color="brown">Archivée</Label> }
          </Grid.Column>
        </Item>
      ))}
    </Item.Group>
  </Grid>
  // Fin de la grille - End of Grid
);

// == PROP TYPES
CardProjects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
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
    }),
  ).isRequired,
};
// == Export
export default CardProjects;
