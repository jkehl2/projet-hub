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
  
  <Grid.Row>
    <Item.Group divided>
      { projects.map((project) => (
        <Item key={project.id}>
          <Grid columns={3}>
            <Item.Image size="small" src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid>
          <Item.Content>
            <Item.Header as="h1">
              <span>{`${project.title}`}</span>
              {!project.isAuthor && (project.isFavorite ? <Icon name="star" /> : <Icon name="star outline" />)}
              {project.isArchived && <Label as="span" tag color="brown">Archivée</Label>}
            </Item.Header>
            <Item.Meta>
              <Image avatar spaced="right" src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
              <Label as="a" href="mailto:george.orwell@localhub.fr">
                <span>{`${project.author}`}</span>
                <Label.Detail>{`${project.authorEmail}`}</Label.Detail>
              </Label>
            </Item.Meta>
            <Item.Extra>
              <Segment basic>
                <Label>
                  Date création
                  <Label.Detail>{`${project.createDate}`}</Label.Detail>
                    </Label>
                    <Label>
                      Date expiration
                      <Label.Detail>{`${project.expireDate}`}</Label.Detail>
                    </Label>
                  </Segment>
              <Segment basic textAlign="right">
                    <Label>
                      Adresse
                      <Label.Detail>{`${project.adress}`}</Label.Detail>
                    </Label>
                  </Segment>
            </Item.Extra>
          </Item.Content>
        </Item>
        ))}
    </Item.Group>
  </Grid.Row>
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
