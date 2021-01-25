// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Divider,
  Grid,
  Header,
  Icon, Image, Label, Segment,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './description.scss';

// == Composant
const Description = ({ logged, project }) => (
  <Segment>
    { project.isArchived && <Label color="blue" corner="right" icon="archive" size="big" /> }
    <Grid divided stretched stackable padded="vertically">
      <Grid.Row only="mobile">
        <Image src={`${project.image}`} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column computer={3} only="computer">
          <Image src={`${project.image}`} />
        </Grid.Column>
        <Grid.Column computer={13} mobile={16}>
          <Header as="h3">
            {(!project.isAuthor && logged) && (project.isFavorite ? <Icon name="star" color="yellow" /> : <Icon name="star outline" color="yellow" />)}
            <Header.Content>{`${project.title} `}</Header.Content>
          </Header>
          <p><Image avatar spaced="right" src={`${project.author.avatar}`} />{`${project.author.name}`}</p>
          <p><Icon name="target" />{`${project.location}`}</p>
          <Divider>Description</Divider>
          <Segment basic>{`${project.description}`}</Segment>
          <Divider />
          <Label.Group>
            <Label basic content="Créé le" detail={`${project.creation_date}`} />
            <Label basic content="Expire le" detail={`${project.expiration_date}`} />
            <Label as="a" basic href={`mailto:${project.author.email}`} content={`${project.author.email}`} icon="mail" />
          </Label.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);
// == PROP TYPES
Description.propTypes = {
  logged: PropTypes.bool.isRequired,
  project: PropTypes.shape({
    isFavorite: PropTypes.bool.isRequired,
    isArchived: PropTypes.bool.isRequired,
    isAuthor: PropTypes.bool.isRequired,
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
};

// == Export
export default Description;
