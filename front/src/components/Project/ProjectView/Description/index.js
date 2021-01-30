// == Import npm
import React from 'react';
import PropTypes, { shape } from 'prop-types';

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
const Description = ({ logged, project }) => {
  // eslint-disable-next-line no-nested-ternary
  const iconFavorite = (project.isAuthor || !logged)
    ? {}
    : project.isFavorite
      ? {
        name: 'star',
        color: 'yellow',
        size: 'small',
      }
      : {
        name: 'star outline',
        color: 'yellow',
        size: 'small',
      };

  return (
    <>
      { project.isArchived && <Label color="blue" corner="right" icon="archive" size="big" /> }
      <Grid divided stretched stackable verticalAlign="middle">
        <Grid.Row only="mobile">
          <Segment basic computer textAlign="center">
            <Image src={`${project.image}`} centered spaced rounded />
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column computer={6} only="computer">
            <Segment basic computer>
              <Image src={`${project.image}`} centered spaced rounded />
            </Segment>
          </Grid.Column>
          <Grid.Column computer={10} mobile={16}>
            <Header
              size="small"
              icon={iconFavorite}
              content={` ${project.title}`}
            />
            <p className="description--marged-top"><Image avatar spaced="right" src={`${project.author.avatar}`} size="mini" />{`${project.author.name}`}</p>
            <p className="description--marged-top"><Icon name="target" />{`${project.location}`}</p>
            <Divider horizontal>Description</Divider>
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
    </>
  );
};
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
};

// == Export
export default Description;
