// == IMPORT PACKAGES
import React from 'react';
import PropTypes, { shape } from 'prop-types';

// == IMPORTS COMPONENTS
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Label,
  Segment,
} from 'semantic-ui-react';

// == STYLES
import './description.scss';

// SUB COMPONENT - FAVORITES
const HeaderStar = ({
  project, size, logged, addToFavorite, removeFromFavorite,
}) => (
  <>
    <Header as="h3" size={`${size}`}>
      <Header.Content className="header--title">{`${project.title} `}</Header.Content>
    </Header>
    <Segment compact basic className="description--marged-none">
      { (!project.isAuthor && logged && !project.isArchived)
      && (project.isFavorite
        ? (
          <Button
            icon={{
              name: 'star',
              color: 'yellow',
            }}
            size="mini"
            onClick={() => {
              removeFromFavorite(project.id);
            }}
            content="Retirer des favoris"
            labelPosition="left"
            basic
            compact
          />
        )
        : (
          <Button
            icon={{
              name: 'star outline',
              color: 'yellow',
            }}
            size="mini"
            onClick={() => {
              addToFavorite(project.id);
            }}
            content="Ajouter aux favoris"
            labelPosition="left"
            basic
            compact
          />
        )
      )}
    </Segment>
  </>
);
HeaderStar.propTypes = {
  project: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
  logged: PropTypes.bool.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
};

// == COMPONENT
const Description = ({
  logged,
  project,
  addToFavorite,
  removeFromFavorite,
}) => (
  <>
    { project.isArchived && <Label color="grey" corner="right" icon="archive" size="big" /> }
    <Grid divided stretched stackable verticalAlign="middle">
      <Grid.Row only="mobile">
        <Segment basic textAlign="center">
          <Image src={`${project.image}`} centered spaced rounded />
        </Segment>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column computer={6} only="computer">
          <Segment basic>
            <Image src={`${project.image}`} centered spaced rounded />
          </Segment>
        </Grid.Column>
        <Grid.Column computer={10} mobile={16}>
          <HeaderStar
            project={project}
            size="large"
            logged={logged}
            addToFavorite={addToFavorite}
            removeFromFavorite={removeFromFavorite}
          />
          <p className="description--marged-top"><Image avatar spaced="right" src={`${project.author.avatar}`} size="mini" />{`${project.author.name}`}</p>
          <p className="description--marged-top"><Icon name="target" />{`${project.location}`}</p>
          <Divider horizontal>Description</Divider>
          <Segment basic>{`${project.description}`}</Segment>
          <Divider />
          <Label.Group>
            <Label basic icon="star" content={`${project.followers.length}`} />
            <Label basic content="Créé le" detail={`${project.creation_date}`} />
            <Label basic content="Expire le" detail={`${project.expiration_date}`} />
            <Label as="a" basic href={`mailto:${project.author.email}`} content={`${project.author.email}`} icon="mail" />
          </Label.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);
// == PROP TYPES
Description.propTypes = {
  logged: PropTypes.bool.isRequired,
  project: PropTypes.shape({
    isFavorite: PropTypes.bool.isRequired,
    isArchived: PropTypes.bool.isRequired,
    isAuthor: PropTypes.bool.isRequired,
    followers: PropTypes.arrayOf(
      shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    expiration_date: PropTypes.string.isRequired,
    creation_date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  addToFavorite: PropTypes.func.isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
};

// == Export
export default Description;
